# `snowflake_materialized_view`

Refer to the Terraform Registory for docs: [`snowflake_materialized_view`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view).

# `materializedView` Submodule <a name="`materializedView` Submodule" id="@cdktf/provider-snowflake.materializedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedView <a name="MaterializedView" id="@cdktf/provider-snowflake.materializedView.MaterializedView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view snowflake_materialized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

new materializedView.MaterializedView(scope: Construct, id: string, config: MaterializedViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig">MaterializedViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig">MaterializedViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetOrReplace">resetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTag` <a name="putTag" id="@cdktf/provider-snowflake.materializedView.MaterializedView.putTag"></a>

```typescript
public putTag(value: IResolvable | MaterializedViewTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.materializedView.MaterializedView.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSecure` <a name="resetIsSecure" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetIsSecure"></a>

```typescript
public resetIsSecure(): void
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetOrReplace"></a>

```typescript
public resetOrReplace(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetTag"></a>

```typescript
public resetTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isConstruct"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

materializedView.MaterializedView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformElement"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

materializedView.MaterializedView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformResource"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

materializedView.MaterializedView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList">MaterializedViewTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecureInput">isSecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplaceInput">orReplaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouseInput">warehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecure">isSecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplace">orReplace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.tag"></a>

```typescript
public readonly tag: MaterializedViewTagList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList">MaterializedViewTagList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecureInput"></a>

```typescript
public readonly isSecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplaceInput"></a>

```typescript
public readonly orReplaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | MaterializedViewTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouseInput"></a>

```typescript
public readonly warehouseInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecure"></a>

```typescript
public readonly isSecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplace"></a>

```typescript
public readonly orReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedViewConfig <a name="MaterializedViewConfig" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.Initializer"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

const materializedViewConfig: materializedView.MaterializedViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the view. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the view; must be unique for the schema in which the view is created. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the view. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.statement">statement</a></code> | <code>string</code> | Specifies the query used to create the view. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.warehouse">warehouse</a></code> | <code>string</code> | The warehouse name. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the view. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#id MaterializedView#id}. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.isSecure">isSecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the view is secure. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.orReplace">orReplace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Overwrites the View if it exists. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#database MaterializedView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the view; must be unique for the schema in which the view is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#name MaterializedView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#schema MaterializedView#schema}

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query used to create the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#statement MaterializedView#statement}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

The warehouse name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#warehouse MaterializedView#warehouse}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#comment MaterializedView#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#id MaterializedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.isSecure"></a>

```typescript
public readonly isSecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the view is secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#is_secure MaterializedView#is_secure}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.orReplace"></a>

```typescript
public readonly orReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Overwrites the View if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#or_replace MaterializedView#or_replace}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | MaterializedViewTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#tag MaterializedView#tag}

---

### MaterializedViewTag <a name="MaterializedViewTag" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.Initializer"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

const materializedViewTag: materializedView.MaterializedViewTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.name">name</a></code> | <code>string</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.value">value</a></code> | <code>string</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.database">database</a></code> | <code>string</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.schema">schema</a></code> | <code>string</code> | Name of the schema that the tag was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#name MaterializedView#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#value MaterializedView#value}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#database MaterializedView#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/materialized_view#schema MaterializedView#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### MaterializedViewTagList <a name="MaterializedViewTagList" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

new materializedView.MaterializedViewTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.get"></a>

```typescript
public get(index: number): MaterializedViewTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaterializedViewTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>[]

---


### MaterializedViewTagOutputReference <a name="MaterializedViewTagOutputReference" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer"></a>

```typescript
import { materializedView } from '@cdktf/provider-snowflake'

new materializedView.MaterializedViewTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaterializedViewTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag">MaterializedViewTag</a>

---



