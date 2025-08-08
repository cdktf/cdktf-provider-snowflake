# `storageIntegration` Submodule <a name="`storageIntegration` Submodule" id="@cdktf/provider-snowflake.storageIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegration <a name="StorageIntegration" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration snowflake_storage_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegration(
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
  storage_allowed_locations: typing.List[str],
  storage_provider: str,
  azure_tenant_id: str = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  storage_aws_external_id: str = None,
  storage_aws_object_acl: str = None,
  storage_aws_role_arn: str = None,
  storage_blocked_locations: typing.List[str] = None,
  timeouts: StorageIntegrationTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#name StorageIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageProvider">storage_provider</a></code> | <code>str</code> | Specifies the storage provider for the integration. Valid options are: `S3` \| `S3GOV` \| `S3CHINA` \| `GCS` \| `AZURE`. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | (Default: ``). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: ``). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#id StorageIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | The external ID that Snowflake will use when assuming the AWS role. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code>str</code> | "bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | (Default: ``). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | (Default: `EXTERNAL_STAGE`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#name StorageIntegration#name}.

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAllowedLocations"></a>

- *Type:* typing.List[str]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_allowed_locations StorageIntegration#storage_allowed_locations}

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageProvider"></a>

- *Type:* str

Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.azureTenantId"></a>

- *Type:* str

(Default: ``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.comment"></a>

- *Type:* str

(Default: ``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#comment StorageIntegration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#enabled StorageIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#id StorageIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_aws_external_id`<sup>Optional</sup> <a name="storage_aws_external_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAwsExternalId"></a>

- *Type:* str

The external ID that Snowflake will use when assuming the AWS role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_aws_external_id StorageIntegration#storage_aws_external_id}

---

##### `storage_aws_object_acl`<sup>Optional</sup> <a name="storage_aws_object_acl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAwsObjectAcl"></a>

- *Type:* str

"bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_aws_object_acl StorageIntegration#storage_aws_object_acl}

---

##### `storage_aws_role_arn`<sup>Optional</sup> <a name="storage_aws_role_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageAwsRoleArn"></a>

- *Type:* str

(Default: ``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}

---

##### `storage_blocked_locations`<sup>Optional</sup> <a name="storage_blocked_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.storageBlockedLocations"></a>

- *Type:* typing.List[str]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_blocked_locations StorageIntegration#storage_blocked_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#timeouts StorageIntegration#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.type"></a>

- *Type:* str

(Default: `EXTERNAL_STAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#type StorageIntegration#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsExternalId">reset_storage_aws_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl">reset_storage_aws_object_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn">reset_storage_aws_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations">reset_storage_blocked_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#create StorageIntegration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#delete StorageIntegration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#read StorageIntegration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#update StorageIntegration#update}.

---

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_aws_external_id` <a name="reset_storage_aws_external_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsExternalId"></a>

```python
def reset_storage_aws_external_id() -> None
```

##### `reset_storage_aws_object_acl` <a name="reset_storage_aws_object_acl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl"></a>

```python
def reset_storage_aws_object_acl() -> None
```

##### `reset_storage_aws_role_arn` <a name="reset_storage_aws_role_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn"></a>

```python
def reset_storage_aws_role_arn() -> None
```

##### `reset_storage_blocked_locations` <a name="reset_storage_blocked_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations"></a>

```python
def reset_storage_blocked_locations() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl">azure_consent_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName">azure_multi_tenant_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList">StorageIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn">storage_aws_iam_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount">storage_gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference">StorageIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput">storage_allowed_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalIdInput">storage_aws_external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput">storage_aws_object_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput">storage_aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput">storage_blocked_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput">storage_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider">storage_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_consent_url`<sup>Required</sup> <a name="azure_consent_url" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl"></a>

```python
azure_consent_url: str
```

- *Type:* str

---

##### `azure_multi_tenant_app_name`<sup>Required</sup> <a name="azure_multi_tenant_app_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName"></a>

```python
azure_multi_tenant_app_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.describeOutput"></a>

```python
describe_output: StorageIntegrationDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList">StorageIntegrationDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `storage_aws_iam_user_arn`<sup>Required</sup> <a name="storage_aws_iam_user_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn"></a>

```python
storage_aws_iam_user_arn: str
```

- *Type:* str

---

##### `storage_gcp_service_account`<sup>Required</sup> <a name="storage_gcp_service_account" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount"></a>

```python
storage_gcp_service_account: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeouts"></a>

```python
timeouts: StorageIntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference">StorageIntegrationTimeoutsOutputReference</a>

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_allowed_locations_input`<sup>Optional</sup> <a name="storage_allowed_locations_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput"></a>

```python
storage_allowed_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_aws_external_id_input`<sup>Optional</sup> <a name="storage_aws_external_id_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalIdInput"></a>

```python
storage_aws_external_id_input: str
```

- *Type:* str

---

##### `storage_aws_object_acl_input`<sup>Optional</sup> <a name="storage_aws_object_acl_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput"></a>

```python
storage_aws_object_acl_input: str
```

- *Type:* str

---

##### `storage_aws_role_arn_input`<sup>Optional</sup> <a name="storage_aws_role_arn_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput"></a>

```python
storage_aws_role_arn_input: str
```

- *Type:* str

---

##### `storage_blocked_locations_input`<sup>Optional</sup> <a name="storage_blocked_locations_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput"></a>

```python
storage_blocked_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_provider_input`<sup>Optional</sup> <a name="storage_provider_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput"></a>

```python
storage_provider_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageIntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_aws_external_id`<sup>Required</sup> <a name="storage_aws_external_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId"></a>

```python
storage_aws_external_id: str
```

- *Type:* str

---

##### `storage_aws_object_acl`<sup>Required</sup> <a name="storage_aws_object_acl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl"></a>

```python
storage_aws_object_acl: str
```

- *Type:* str

---

##### `storage_aws_role_arn`<sup>Required</sup> <a name="storage_aws_role_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn"></a>

```python
storage_aws_role_arn: str
```

- *Type:* str

---

##### `storage_blocked_locations`<sup>Required</sup> <a name="storage_blocked_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider"></a>

```python
storage_provider: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageIntegrationConfig <a name="StorageIntegrationConfig" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_allowed_locations: typing.List[str],
  storage_provider: str,
  azure_tenant_id: str = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  storage_aws_external_id: str = None,
  storage_aws_object_acl: str = None,
  storage_aws_role_arn: str = None,
  storage_blocked_locations: typing.List[str] = None,
  timeouts: StorageIntegrationTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#name StorageIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider">storage_provider</a></code> | <code>str</code> | Specifies the storage provider for the integration. Valid options are: `S3` \| `S3GOV` \| `S3CHINA` \| `GCS` \| `AZURE`. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | (Default: ``). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment">comment</a></code> | <code>str</code> | (Default: ``). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#id StorageIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | The external ID that Snowflake will use when assuming the AWS role. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code>str</code> | "bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | (Default: ``). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type">type</a></code> | <code>str</code> | (Default: `EXTERNAL_STAGE`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#name StorageIntegration#name}.

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_allowed_locations StorageIntegration#storage_allowed_locations}

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider"></a>

```python
storage_provider: str
```

- *Type:* str

Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

(Default: ``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: ``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#comment StorageIntegration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#enabled StorageIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#id StorageIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_aws_external_id`<sup>Optional</sup> <a name="storage_aws_external_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsExternalId"></a>

```python
storage_aws_external_id: str
```

- *Type:* str

The external ID that Snowflake will use when assuming the AWS role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_aws_external_id StorageIntegration#storage_aws_external_id}

---

##### `storage_aws_object_acl`<sup>Optional</sup> <a name="storage_aws_object_acl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl"></a>

```python
storage_aws_object_acl: str
```

- *Type:* str

"bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_aws_object_acl StorageIntegration#storage_aws_object_acl}

---

##### `storage_aws_role_arn`<sup>Optional</sup> <a name="storage_aws_role_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn"></a>

```python
storage_aws_role_arn: str
```

- *Type:* str

(Default: ``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}

---

##### `storage_blocked_locations`<sup>Optional</sup> <a name="storage_blocked_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#storage_blocked_locations StorageIntegration#storage_blocked_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.timeouts"></a>

```python
timeouts: StorageIntegrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#timeouts StorageIntegration#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

(Default: `EXTERNAL_STAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#type StorageIntegration#type}

---

### StorageIntegrationDescribeOutput <a name="StorageIntegrationDescribeOutput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutput()
```


### StorageIntegrationDescribeOutputAzureConsentUrl <a name="StorageIntegrationDescribeOutputAzureConsentUrl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl()
```


### StorageIntegrationDescribeOutputAzureMultiTenantAppName <a name="StorageIntegrationDescribeOutputAzureMultiTenantAppName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName()
```


### StorageIntegrationDescribeOutputComment <a name="StorageIntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputComment()
```


### StorageIntegrationDescribeOutputEnabled <a name="StorageIntegrationDescribeOutputEnabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputEnabled()
```


### StorageIntegrationDescribeOutputStorageAllowedLocations <a name="StorageIntegrationDescribeOutputStorageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations()
```


### StorageIntegrationDescribeOutputStorageAwsExternalId <a name="StorageIntegrationDescribeOutputStorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId()
```


### StorageIntegrationDescribeOutputStorageAwsIamUserArn <a name="StorageIntegrationDescribeOutputStorageAwsIamUserArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn()
```


### StorageIntegrationDescribeOutputStorageAwsObjectAcl <a name="StorageIntegrationDescribeOutputStorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl()
```


### StorageIntegrationDescribeOutputStorageAwsRoleArn <a name="StorageIntegrationDescribeOutputStorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn()
```


### StorageIntegrationDescribeOutputStorageBlockedLocations <a name="StorageIntegrationDescribeOutputStorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations()
```


### StorageIntegrationDescribeOutputStorageGcpServiceAccount <a name="StorageIntegrationDescribeOutputStorageGcpServiceAccount" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount()
```


### StorageIntegrationDescribeOutputStorageProvider <a name="StorageIntegrationDescribeOutputStorageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageProvider()
```


### StorageIntegrationDescribeOutputUsePrivatelinkEndpoint <a name="StorageIntegrationDescribeOutputUsePrivatelinkEndpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint()
```


### StorageIntegrationTimeouts <a name="StorageIntegrationTimeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#create StorageIntegration#create}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#delete StorageIntegration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#read StorageIntegration#read}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#update StorageIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#create StorageIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#delete StorageIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#read StorageIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/storage_integration#update StorageIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageIntegrationDescribeOutputAzureConsentUrlList <a name="StorageIntegrationDescribeOutputAzureConsentUrlList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputAzureConsentUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputAzureConsentUrlOutputReference <a name="StorageIntegrationDescribeOutputAzureConsentUrlOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl">StorageIntegrationDescribeOutputAzureConsentUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputAzureConsentUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl">StorageIntegrationDescribeOutputAzureConsentUrl</a>

---


### StorageIntegrationDescribeOutputAzureMultiTenantAppNameList <a name="StorageIntegrationDescribeOutputAzureMultiTenantAppNameList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference <a name="StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName">StorageIntegrationDescribeOutputAzureMultiTenantAppName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputAzureMultiTenantAppName
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName">StorageIntegrationDescribeOutputAzureMultiTenantAppName</a>

---


### StorageIntegrationDescribeOutputCommentList <a name="StorageIntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputCommentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputCommentOutputReference <a name="StorageIntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment">StorageIntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputComment
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment">StorageIntegrationDescribeOutputComment</a>

---


### StorageIntegrationDescribeOutputEnabledList <a name="StorageIntegrationDescribeOutputEnabledList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputEnabledList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputEnabledOutputReference <a name="StorageIntegrationDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled">StorageIntegrationDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputEnabled
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled">StorageIntegrationDescribeOutputEnabled</a>

---


### StorageIntegrationDescribeOutputList <a name="StorageIntegrationDescribeOutputList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputOutputReference <a name="StorageIntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureConsentUrl">azure_consent_url</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList">StorageIntegrationDescribeOutputAzureConsentUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureMultiTenantAppName">azure_multi_tenant_app_name</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList">StorageIntegrationDescribeOutputAzureMultiTenantAppNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList">StorageIntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList">StorageIntegrationDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList">StorageIntegrationDescribeOutputStorageAllowedLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsExternalId">storage_aws_external_id</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList">StorageIntegrationDescribeOutputStorageAwsExternalIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsIamUserArn">storage_aws_iam_user_arn</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList">StorageIntegrationDescribeOutputStorageAwsIamUserArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList">StorageIntegrationDescribeOutputStorageAwsObjectAclList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList">StorageIntegrationDescribeOutputStorageAwsRoleArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList">StorageIntegrationDescribeOutputStorageBlockedLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageGcpServiceAccount">storage_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList">StorageIntegrationDescribeOutputStorageGcpServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageProvider">storage_provider</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList">StorageIntegrationDescribeOutputStorageProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList">StorageIntegrationDescribeOutputUsePrivatelinkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput">StorageIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_consent_url`<sup>Required</sup> <a name="azure_consent_url" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureConsentUrl"></a>

```python
azure_consent_url: StorageIntegrationDescribeOutputAzureConsentUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList">StorageIntegrationDescribeOutputAzureConsentUrlList</a>

---

##### `azure_multi_tenant_app_name`<sup>Required</sup> <a name="azure_multi_tenant_app_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```python
azure_multi_tenant_app_name: StorageIntegrationDescribeOutputAzureMultiTenantAppNameList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList">StorageIntegrationDescribeOutputAzureMultiTenantAppNameList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.comment"></a>

```python
comment: StorageIntegrationDescribeOutputCommentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList">StorageIntegrationDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: StorageIntegrationDescribeOutputEnabledList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList">StorageIntegrationDescribeOutputEnabledList</a>

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: StorageIntegrationDescribeOutputStorageAllowedLocationsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList">StorageIntegrationDescribeOutputStorageAllowedLocationsList</a>

---

##### `storage_aws_external_id`<sup>Required</sup> <a name="storage_aws_external_id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsExternalId"></a>

```python
storage_aws_external_id: StorageIntegrationDescribeOutputStorageAwsExternalIdList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList">StorageIntegrationDescribeOutputStorageAwsExternalIdList</a>

---

##### `storage_aws_iam_user_arn`<sup>Required</sup> <a name="storage_aws_iam_user_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsIamUserArn"></a>

```python
storage_aws_iam_user_arn: StorageIntegrationDescribeOutputStorageAwsIamUserArnList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList">StorageIntegrationDescribeOutputStorageAwsIamUserArnList</a>

---

##### `storage_aws_object_acl`<sup>Required</sup> <a name="storage_aws_object_acl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsObjectAcl"></a>

```python
storage_aws_object_acl: StorageIntegrationDescribeOutputStorageAwsObjectAclList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList">StorageIntegrationDescribeOutputStorageAwsObjectAclList</a>

---

##### `storage_aws_role_arn`<sup>Required</sup> <a name="storage_aws_role_arn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsRoleArn"></a>

```python
storage_aws_role_arn: StorageIntegrationDescribeOutputStorageAwsRoleArnList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList">StorageIntegrationDescribeOutputStorageAwsRoleArnList</a>

---

##### `storage_blocked_locations`<sup>Required</sup> <a name="storage_blocked_locations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: StorageIntegrationDescribeOutputStorageBlockedLocationsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList">StorageIntegrationDescribeOutputStorageBlockedLocationsList</a>

---

##### `storage_gcp_service_account`<sup>Required</sup> <a name="storage_gcp_service_account" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageGcpServiceAccount"></a>

```python
storage_gcp_service_account: StorageIntegrationDescribeOutputStorageGcpServiceAccountList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList">StorageIntegrationDescribeOutputStorageGcpServiceAccountList</a>

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageProvider"></a>

```python
storage_provider: StorageIntegrationDescribeOutputStorageProviderList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList">StorageIntegrationDescribeOutputStorageProviderList</a>

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: StorageIntegrationDescribeOutputUsePrivatelinkEndpointList
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList">StorageIntegrationDescribeOutputUsePrivatelinkEndpointList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput">StorageIntegrationDescribeOutput</a>

---


### StorageIntegrationDescribeOutputStorageAllowedLocationsList <a name="StorageIntegrationDescribeOutputStorageAllowedLocationsList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference <a name="StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations">StorageIntegrationDescribeOutputStorageAllowedLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageAllowedLocations
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations">StorageIntegrationDescribeOutputStorageAllowedLocations</a>

---


### StorageIntegrationDescribeOutputStorageAwsExternalIdList <a name="StorageIntegrationDescribeOutputStorageAwsExternalIdList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId">StorageIntegrationDescribeOutputStorageAwsExternalId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageAwsExternalId
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId">StorageIntegrationDescribeOutputStorageAwsExternalId</a>

---


### StorageIntegrationDescribeOutputStorageAwsIamUserArnList <a name="StorageIntegrationDescribeOutputStorageAwsIamUserArnList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn">StorageIntegrationDescribeOutputStorageAwsIamUserArn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageAwsIamUserArn
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn">StorageIntegrationDescribeOutputStorageAwsIamUserArn</a>

---


### StorageIntegrationDescribeOutputStorageAwsObjectAclList <a name="StorageIntegrationDescribeOutputStorageAwsObjectAclList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl">StorageIntegrationDescribeOutputStorageAwsObjectAcl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageAwsObjectAcl
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl">StorageIntegrationDescribeOutputStorageAwsObjectAcl</a>

---


### StorageIntegrationDescribeOutputStorageAwsRoleArnList <a name="StorageIntegrationDescribeOutputStorageAwsRoleArnList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn">StorageIntegrationDescribeOutputStorageAwsRoleArn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageAwsRoleArn
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn">StorageIntegrationDescribeOutputStorageAwsRoleArn</a>

---


### StorageIntegrationDescribeOutputStorageBlockedLocationsList <a name="StorageIntegrationDescribeOutputStorageBlockedLocationsList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference <a name="StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations">StorageIntegrationDescribeOutputStorageBlockedLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageBlockedLocations
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations">StorageIntegrationDescribeOutputStorageBlockedLocations</a>

---


### StorageIntegrationDescribeOutputStorageGcpServiceAccountList <a name="StorageIntegrationDescribeOutputStorageGcpServiceAccountList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference <a name="StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount">StorageIntegrationDescribeOutputStorageGcpServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount">StorageIntegrationDescribeOutputStorageGcpServiceAccount</a>

---


### StorageIntegrationDescribeOutputStorageProviderList <a name="StorageIntegrationDescribeOutputStorageProviderList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputStorageProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputStorageProviderOutputReference <a name="StorageIntegrationDescribeOutputStorageProviderOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider">StorageIntegrationDescribeOutputStorageProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputStorageProvider
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider">StorageIntegrationDescribeOutputStorageProvider</a>

---


### StorageIntegrationDescribeOutputUsePrivatelinkEndpointList <a name="StorageIntegrationDescribeOutputUsePrivatelinkEndpointList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference <a name="StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint">StorageIntegrationDescribeOutputUsePrivatelinkEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationDescribeOutputUsePrivatelinkEndpoint
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint">StorageIntegrationDescribeOutputUsePrivatelinkEndpoint</a>

---


### StorageIntegrationTimeoutsOutputReference <a name="StorageIntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import storage_integration

storageIntegration.StorageIntegrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageIntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>]

---



