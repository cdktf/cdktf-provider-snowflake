# `listing` Submodule <a name="`listing` Submodule" id="@cdktf/provider-snowflake.listing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Listing <a name="Listing" id="@cdktf/provider-snowflake.listing.Listing"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing snowflake_listing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.listing.Listing.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.Listing(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  manifest: ListingManifest,
  name: str,
  application_package: str = None,
  comment: str = None,
  id: str = None,
  publish: str = None,
  share: str = None,
  timeouts: ListingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the listing identifier (name). |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.applicationPackage">application_package</a></code> | <code>str</code> | Specifies the application package attached to the listing. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the listing. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#id Listing#id}. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.publish">publish</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Determines if the listing should be published. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.share">share</a></code> | <code>str</code> | Specifies the identifier for the share to attach to the listing. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.manifest"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#manifest Listing#manifest}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.name"></a>

- *Type:* str

Specifies the listing identifier (name).

It must be unique within the organization, regardless of which Snowflake region the account is located in. Must start with an alphabetic character and cannot contain spaces or special characters except for underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#name Listing#name}

---

##### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.applicationPackage"></a>

- *Type:* str

Specifies the application package attached to the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#application_package Listing#application_package}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#comment Listing#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#id Listing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.publish"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Determines if the listing should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#publish Listing#publish}

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.share"></a>

- *Type:* str

Specifies the identifier for the share to attach to the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#share Listing#share}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.listing.Listing.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#timeouts Listing#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.putManifest">put_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetApplicationPackage">reset_application_package</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetPublish">reset_publish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetShare">reset_share</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.listing.Listing.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.listing.Listing.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.listing.Listing.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.listing.Listing.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.listing.Listing.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.listing.Listing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.listing.Listing.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.listing.Listing.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.listing.Listing.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.listing.Listing.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.listing.Listing.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.listing.Listing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.listing.Listing.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.listing.Listing.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.listing.Listing.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.listing.Listing.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.listing.Listing.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.listing.Listing.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.listing.Listing.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.listing.Listing.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.listing.Listing.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.listing.Listing.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.listing.Listing.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.listing.Listing.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.listing.Listing.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.listing.Listing.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.Listing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.listing.Listing.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.listing.Listing.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.listing.Listing.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.listing.Listing.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.listing.Listing.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.listing.Listing.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.listing.Listing.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_manifest` <a name="put_manifest" id="@cdktf/provider-snowflake.listing.Listing.putManifest"></a>

```python
def put_manifest(
  from_stage: ListingManifestFromStage = None,
  from_string: str = None
) -> None
```

###### `from_stage`<sup>Optional</sup> <a name="from_stage" id="@cdktf/provider-snowflake.listing.Listing.putManifest.parameter.fromStage"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a>

from_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#from_stage Listing#from_stage}

---

###### `from_string`<sup>Optional</sup> <a name="from_string" id="@cdktf/provider-snowflake.listing.Listing.putManifest.parameter.fromString"></a>

- *Type:* str

Manifest provided as a string.

Wrapping `$$` signs are added by the provider automatically; do not include them. For more information on manifest syntax, see [Listing manifest reference](https://docs.snowflake.com/en/progaccess/listing-manifest-reference). Also, the [multiline string syntax](https://developer.hashicorp.com/terraform/language/expressions/strings#heredoc-strings) is a must here. A proper YAML indentation (2 spaces) is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#from_string Listing#from_string}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.listing.Listing.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.listing.Listing.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#create Listing#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.listing.Listing.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#delete Listing#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.listing.Listing.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#read Listing#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.listing.Listing.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#update Listing#update}.

---

##### `reset_application_package` <a name="reset_application_package" id="@cdktf/provider-snowflake.listing.Listing.resetApplicationPackage"></a>

```python
def reset_application_package() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.listing.Listing.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.listing.Listing.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_publish` <a name="reset_publish" id="@cdktf/provider-snowflake.listing.Listing.resetPublish"></a>

```python
def reset_publish() -> None
```

##### `reset_share` <a name="reset_share" id="@cdktf/provider-snowflake.listing.Listing.resetShare"></a>

```python
def reset_share() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.listing.Listing.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Listing resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.listing.Listing.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.Listing.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.listing.Listing.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.listing.Listing.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.Listing.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.listing.Listing.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.listing.Listing.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.Listing.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.listing.Listing.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.listing.Listing.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.Listing.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Listing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.listing.Listing.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.listing.Listing.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Listing to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.listing.Listing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Listing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.listing.Listing.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Listing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference">ListingManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList">ListingShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference">ListingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.applicationPackageInput">application_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.manifestInput">manifest_input</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.publishInput">publish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.shareInput">share_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.applicationPackage">application_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.publish">publish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.share">share</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.listing.Listing.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.listing.Listing.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.listing.Listing.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.listing.Listing.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.listing.Listing.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.listing.Listing.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.listing.Listing.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.listing.Listing.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.listing.Listing.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.listing.Listing.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.listing.Listing.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.listing.Listing.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.listing.Listing.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.listing.Listing.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.listing.Listing.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-snowflake.listing.Listing.property.manifest"></a>

```python
manifest: ListingManifestOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference">ListingManifestOutputReference</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.listing.Listing.property.showOutput"></a>

```python
show_output: ListingShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList">ListingShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.listing.Listing.property.timeouts"></a>

```python
timeouts: ListingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference">ListingTimeoutsOutputReference</a>

---

##### `application_package_input`<sup>Optional</sup> <a name="application_package_input" id="@cdktf/provider-snowflake.listing.Listing.property.applicationPackageInput"></a>

```python
application_package_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.listing.Listing.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.listing.Listing.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktf/provider-snowflake.listing.Listing.property.manifestInput"></a>

```python
manifest_input: ListingManifest
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.listing.Listing.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `publish_input`<sup>Optional</sup> <a name="publish_input" id="@cdktf/provider-snowflake.listing.Listing.property.publishInput"></a>

```python
publish_input: str
```

- *Type:* str

---

##### `share_input`<sup>Optional</sup> <a name="share_input" id="@cdktf/provider-snowflake.listing.Listing.property.shareInput"></a>

```python
share_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.listing.Listing.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ListingTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a>

---

##### `application_package`<sup>Required</sup> <a name="application_package" id="@cdktf/provider-snowflake.listing.Listing.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.listing.Listing.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.listing.Listing.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.listing.Listing.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktf/provider-snowflake.listing.Listing.property.publish"></a>

```python
publish: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktf/provider-snowflake.listing.Listing.property.share"></a>

```python
share: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.Listing.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.listing.Listing.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ListingConfig <a name="ListingConfig" id="@cdktf/provider-snowflake.listing.ListingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.listing.ListingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  manifest: ListingManifest,
  name: str,
  application_package: str = None,
  comment: str = None,
  id: str = None,
  publish: str = None,
  share: str = None,
  timeouts: ListingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.name">name</a></code> | <code>str</code> | Specifies the listing identifier (name). |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.applicationPackage">application_package</a></code> | <code>str</code> | Specifies the application package attached to the listing. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the listing. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#id Listing#id}. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.publish">publish</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Determines if the listing should be published. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.share">share</a></code> | <code>str</code> | Specifies the identifier for the share to attach to the listing. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.listing.ListingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.listing.ListingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.listing.ListingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.listing.ListingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.listing.ListingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.listing.ListingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.listing.ListingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-snowflake.listing.ListingConfig.property.manifest"></a>

```python
manifest: ListingManifest
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#manifest Listing#manifest}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.listing.ListingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the listing identifier (name).

It must be unique within the organization, regardless of which Snowflake region the account is located in. Must start with an alphabetic character and cannot contain spaces or special characters except for underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#name Listing#name}

---

##### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktf/provider-snowflake.listing.ListingConfig.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

Specifies the application package attached to the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#application_package Listing#application_package}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.listing.ListingConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#comment Listing#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.listing.ListingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#id Listing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-snowflake.listing.ListingConfig.property.publish"></a>

```python
publish: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Determines if the listing should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#publish Listing#publish}

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktf/provider-snowflake.listing.ListingConfig.property.share"></a>

```python
share: str
```

- *Type:* str

Specifies the identifier for the share to attach to the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#share Listing#share}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.listing.ListingConfig.property.timeouts"></a>

```python
timeouts: ListingTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#timeouts Listing#timeouts}

---

### ListingManifest <a name="ListingManifest" id="@cdktf/provider-snowflake.listing.ListingManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.listing.ListingManifest.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingManifest(
  from_stage: ListingManifestFromStage = None,
  from_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifest.property.fromStage">from_stage</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a></code> | from_stage block. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifest.property.fromString">from_string</a></code> | <code>str</code> | Manifest provided as a string. |

---

##### `from_stage`<sup>Optional</sup> <a name="from_stage" id="@cdktf/provider-snowflake.listing.ListingManifest.property.fromStage"></a>

```python
from_stage: ListingManifestFromStage
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a>

from_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#from_stage Listing#from_stage}

---

##### `from_string`<sup>Optional</sup> <a name="from_string" id="@cdktf/provider-snowflake.listing.ListingManifest.property.fromString"></a>

```python
from_string: str
```

- *Type:* str

Manifest provided as a string.

Wrapping `$$` signs are added by the provider automatically; do not include them. For more information on manifest syntax, see [Listing manifest reference](https://docs.snowflake.com/en/progaccess/listing-manifest-reference). Also, the [multiline string syntax](https://developer.hashicorp.com/terraform/language/expressions/strings#heredoc-strings) is a must here. A proper YAML indentation (2 spaces) is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#from_string Listing#from_string}

---

### ListingManifestFromStage <a name="ListingManifestFromStage" id="@cdktf/provider-snowflake.listing.ListingManifestFromStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.listing.ListingManifestFromStage.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingManifestFromStage(
  stage: str,
  location: str = None,
  version_comment: str = None,
  version_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.stage">stage</a></code> | <code>str</code> | Identifier of the stage where the manifest file is located. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.location">location</a></code> | <code>str</code> | Location of the manifest file in the stage. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.versionComment">version_comment</a></code> | <code>str</code> | Specifies a comment for the listing version. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.versionName">version_name</a></code> | <code>str</code> | Represents manifest version name. |

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.stage"></a>

```python
stage: str
```

- *Type:* str

Identifier of the stage where the manifest file is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#stage Listing#stage}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the manifest file in the stage.

If not specified, the manifest file will be expected to be at the root of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#location Listing#location}

---

##### `version_comment`<sup>Optional</sup> <a name="version_comment" id="@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.versionComment"></a>

```python
version_comment: str
```

- *Type:* str

Specifies a comment for the listing version.

Whenever a new version is created, this comment will be associated with it. The comment on the version will be visible in the [SHOW VERSIONS IN LISTING](https://docs.snowflake.com/en/sql-reference/sql/show-versions-in-listing) command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#version_comment Listing#version_comment}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktf/provider-snowflake.listing.ListingManifestFromStage.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Represents manifest version name.

It's case-sensitive and used in manifest versioning. Version name should be specified or changed whenever any changes in the manifest should be applied to the listing. Later on the versions of the listing can be analyzed by calling the [SHOW VERSIONS IN LISTING](https://docs.snowflake.com/en/sql-reference/sql/show-versions-in-listing) command. The resource does not track the changes on the specified stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#version_name Listing#version_name}

---

### ListingShowOutput <a name="ListingShowOutput" id="@cdktf/provider-snowflake.listing.ListingShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.listing.ListingShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingShowOutput()
```


### ListingTimeouts <a name="ListingTimeouts" id="@cdktf/provider-snowflake.listing.ListingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.listing.ListingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#create Listing#create}. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#delete Listing#delete}. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#read Listing#read}. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#update Listing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.listing.ListingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#create Listing#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.listing.ListingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#delete Listing#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.listing.ListingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#read Listing#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.listing.ListingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#update Listing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ListingManifestFromStageOutputReference <a name="ListingManifestFromStageOutputReference" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingManifestFromStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resetVersionComment">reset_version_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resetVersionName">reset_version_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_version_comment` <a name="reset_version_comment" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resetVersionComment"></a>

```python
def reset_version_comment() -> None
```

##### `reset_version_name` <a name="reset_version_name" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.resetVersionName"></a>

```python
def reset_version_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionCommentInput">version_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionComment">version_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `version_comment_input`<sup>Optional</sup> <a name="version_comment_input" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionCommentInput"></a>

```python
version_comment_input: str
```

- *Type:* str

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `version_comment`<sup>Required</sup> <a name="version_comment" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionComment"></a>

```python
version_comment: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference.property.internalValue"></a>

```python
internal_value: ListingManifestFromStage
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a>

---


### ListingManifestOutputReference <a name="ListingManifestOutputReference" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingManifestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.putFromStage">put_from_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resetFromStage">reset_from_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resetFromString">reset_from_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_from_stage` <a name="put_from_stage" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.putFromStage"></a>

```python
def put_from_stage(
  stage: str,
  location: str = None,
  version_comment: str = None,
  version_name: str = None
) -> None
```

###### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.putFromStage.parameter.stage"></a>

- *Type:* str

Identifier of the stage where the manifest file is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#stage Listing#stage}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.putFromStage.parameter.location"></a>

- *Type:* str

Location of the manifest file in the stage.

If not specified, the manifest file will be expected to be at the root of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#location Listing#location}

---

###### `version_comment`<sup>Optional</sup> <a name="version_comment" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.putFromStage.parameter.versionComment"></a>

- *Type:* str

Specifies a comment for the listing version.

Whenever a new version is created, this comment will be associated with it. The comment on the version will be visible in the [SHOW VERSIONS IN LISTING](https://docs.snowflake.com/en/sql-reference/sql/show-versions-in-listing) command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#version_comment Listing#version_comment}

---

###### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.putFromStage.parameter.versionName"></a>

- *Type:* str

Represents manifest version name.

It's case-sensitive and used in manifest versioning. Version name should be specified or changed whenever any changes in the manifest should be applied to the listing. Later on the versions of the listing can be analyzed by calling the [SHOW VERSIONS IN LISTING](https://docs.snowflake.com/en/sql-reference/sql/show-versions-in-listing) command. The resource does not track the changes on the specified stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/listing#version_name Listing#version_name}

---

##### `reset_from_stage` <a name="reset_from_stage" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resetFromStage"></a>

```python
def reset_from_stage() -> None
```

##### `reset_from_string` <a name="reset_from_string" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.resetFromString"></a>

```python
def reset_from_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromStage">from_stage</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference">ListingManifestFromStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromStageInput">from_stage_input</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromStringInput">from_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromString">from_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_stage`<sup>Required</sup> <a name="from_stage" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromStage"></a>

```python
from_stage: ListingManifestFromStageOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStageOutputReference">ListingManifestFromStageOutputReference</a>

---

##### `from_stage_input`<sup>Optional</sup> <a name="from_stage_input" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromStageInput"></a>

```python
from_stage_input: ListingManifestFromStage
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifestFromStage">ListingManifestFromStage</a>

---

##### `from_string_input`<sup>Optional</sup> <a name="from_string_input" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromStringInput"></a>

```python
from_string_input: str
```

- *Type:* str

---

##### `from_string`<sup>Required</sup> <a name="from_string" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.fromString"></a>

```python
from_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.listing.ListingManifestOutputReference.property.internalValue"></a>

```python
internal_value: ListingManifest
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingManifest">ListingManifest</a>

---


### ListingShowOutputList <a name="ListingShowOutputList" id="@cdktf/provider-snowflake.listing.ListingShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ListingShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.listing.ListingShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ListingShowOutputOutputReference <a name="ListingShowOutputOutputReference" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.detailedTargetAccounts">detailed_target_accounts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.distribution">distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.globalName">global_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isApplication">is_application</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isByRequest">is_by_request</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isLimitedTrial">is_limited_trial</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isMonetized">is_monetized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isMountlessQueryable">is_mountless_queryable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isTargeted">is_targeted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.organizationProfileName">organization_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.publishedOn">published_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.regions">regions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.rejectedOn">rejected_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.subtitle">subtitle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.targetAccounts">target_accounts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.uniformListingLocator">uniform_listing_locator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.listing.ListingShowOutput">ListingShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `detailed_target_accounts`<sup>Required</sup> <a name="detailed_target_accounts" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.detailedTargetAccounts"></a>

```python
detailed_target_accounts: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

---

##### `global_name`<sup>Required</sup> <a name="global_name" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.globalName"></a>

```python
global_name: str
```

- *Type:* str

---

##### `is_application`<sup>Required</sup> <a name="is_application" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isApplication"></a>

```python
is_application: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_by_request`<sup>Required</sup> <a name="is_by_request" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isByRequest"></a>

```python
is_by_request: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_limited_trial`<sup>Required</sup> <a name="is_limited_trial" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isLimitedTrial"></a>

```python
is_limited_trial: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_monetized`<sup>Required</sup> <a name="is_monetized" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isMonetized"></a>

```python
is_monetized: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mountless_queryable`<sup>Required</sup> <a name="is_mountless_queryable" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isMountlessQueryable"></a>

```python
is_mountless_queryable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_targeted`<sup>Required</sup> <a name="is_targeted" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.isTargeted"></a>

```python
is_targeted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_profile_name`<sup>Required</sup> <a name="organization_profile_name" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.organizationProfileName"></a>

```python
organization_profile_name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `published_on`<sup>Required</sup> <a name="published_on" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.publishedOn"></a>

```python
published_on: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.regions"></a>

```python
regions: str
```

- *Type:* str

---

##### `rejected_on`<sup>Required</sup> <a name="rejected_on" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.rejectedOn"></a>

```python
rejected_on: str
```

- *Type:* str

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subtitle`<sup>Required</sup> <a name="subtitle" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.subtitle"></a>

```python
subtitle: str
```

- *Type:* str

---

##### `target_accounts`<sup>Required</sup> <a name="target_accounts" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.targetAccounts"></a>

```python
target_accounts: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `uniform_listing_locator`<sup>Required</sup> <a name="uniform_listing_locator" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.uniformListingLocator"></a>

```python
uniform_listing_locator: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.listing.ListingShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ListingShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.listing.ListingShowOutput">ListingShowOutput</a>

---


### ListingTimeoutsOutputReference <a name="ListingTimeoutsOutputReference" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import listing

listing.ListingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.listing.ListingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ListingTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.listing.ListingTimeouts">ListingTimeouts</a>

---



