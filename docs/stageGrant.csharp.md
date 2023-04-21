# `snowflake_stage_grant`

Refer to the Terraform Registory for docs: [`snowflake_stage_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant).

# `stageGrant` Submodule <a name="`stageGrant` Submodule" id="@cdktf/provider-snowflake.stageGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageGrant <a name="StageGrant" id="@cdktf/provider-snowflake.stageGrant.StageGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant snowflake_stage_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StageGrant(Construct Scope, string Id, StageGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig">StageGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.stageGrant.StageGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig">StageGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetOnAll">ResetOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetOnFuture">ResetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetStageName">ResetStageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.stageGrant.StageGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.stageGrant.StageGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.stageGrant.StageGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.stageGrant.StageGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.stageGrant.StageGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.stageGrant.StageGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.stageGrant.StageGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.stageGrant.StageGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.stageGrant.StageGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetEnableMultipleGrants"></a>

```csharp
private void ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnAll` <a name="ResetOnAll" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetOnAll"></a>

```csharp
private void ResetOnAll()
```

##### `ResetOnFuture` <a name="ResetOnFuture" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetOnFuture"></a>

```csharp
private void ResetOnFuture()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetPrivilege"></a>

```csharp
private void ResetPrivilege()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetStageName"></a>

```csharp
private void ResetStageName()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.stageGrant.StageGrant.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.stageGrant.StageGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StageGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.stageGrant.StageGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.stageGrant.StageGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StageGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.stageGrant.StageGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.stageGrant.StageGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StageGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.stageGrant.StageGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.onAllInput">OnAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.onFutureInput">OnFutureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.onAll">OnAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.onFuture">OnFuture</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.enableMultipleGrantsInput"></a>

```csharp
public object EnableMultipleGrantsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnAllInput`<sup>Optional</sup> <a name="OnAllInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.onAllInput"></a>

```csharp
public object OnAllInput { get; }
```

- *Type:* object

---

##### `OnFutureInput`<sup>Optional</sup> <a name="OnFutureInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.onFutureInput"></a>

```csharp
public object OnFutureInput { get; }
```

- *Type:* object

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.privilegeInput"></a>

```csharp
public string PrivilegeInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnAll`<sup>Required</sup> <a name="OnAll" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.onAll"></a>

```csharp
public object OnAll { get; }
```

- *Type:* object

---

##### `OnFuture`<sup>Required</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.onFuture"></a>

```csharp
public object OnFuture { get; }
```

- *Type:* object

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.stageGrant.StageGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StageGrantConfig <a name="StageGrantConfig" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StageGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string[] Roles,
    object EnableMultipleGrants = null,
    string Id = null,
    object OnAll = null,
    object OnFuture = null,
    string Privilege = null,
    string SchemaName = null,
    string StageName = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database containing the current stage on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.roles">Roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#id StageGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.onAll">OnAll</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all stages in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.onFuture">OnFuture</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all future stages in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.privilege">Privilege</a></code> | <code>string</code> | The privilege to grant on the stage. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema containing the current stage on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.stageName">StageName</a></code> | <code>string</code> | The name of the stage on which to grant privilege (only valid if on_future and on_all are false). |
| <code><a href="#@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database containing the current stage on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#database_name StageGrant#database_name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#roles StageGrant#roles}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; set; }
```

- *Type:* object

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#enable_multiple_grants StageGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#id StageGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAll`<sup>Optional</sup> <a name="OnAll" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.onAll"></a>

```csharp
public object OnAll { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all stages in the given schema.

When this is true and no schema_name is provided apply this grant on all stages in the given database. The stage_name field must be unset in order to use on_all. Cannot be used together with on_future. Importing the resource with the on_all=true option is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#on_all StageGrant#on_all}

---

##### `OnFuture`<sup>Optional</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.onFuture"></a>

```csharp
public object OnFuture { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all future stages in the given schema.

When this is true and no schema_name is provided apply this grant on all future stages in the given database. The stage_name field must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#on_future StageGrant#on_future}

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.privilege"></a>

```csharp
public string Privilege { get; set; }
```

- *Type:* string

The privilege to grant on the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#privilege StageGrant#privilege}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema containing the current stage on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#schema_name StageGrant#schema_name}

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

The name of the stage on which to grant privilege (only valid if on_future and on_all are false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#stage_name StageGrant#stage_name}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.stageGrant.StageGrantConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/stage_grant#with_grant_option StageGrant#with_grant_option}

---



