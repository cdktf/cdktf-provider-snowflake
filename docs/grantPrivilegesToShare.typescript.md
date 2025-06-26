# `grantPrivilegesToShare` Submodule <a name="`grantPrivilegesToShare` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToShare <a name="GrantPrivilegesToShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share snowflake_grant_privileges_to_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

new grantPrivilegesToShare.GrantPrivilegesToShare(scope: Construct, id: string, config: GrantPrivilegesToShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig">GrantPrivilegesToShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig">GrantPrivilegesToShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema">resetOnAllTablesInSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase">resetOnDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnFunction">resetOnFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema">resetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable">resetOnTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag">resetOnTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView">resetOnView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts"></a>

```typescript
public putTimeouts(value: GrantPrivilegesToShareTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnAllTablesInSchema` <a name="resetOnAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema"></a>

```typescript
public resetOnAllTablesInSchema(): void
```

##### `resetOnDatabase` <a name="resetOnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase"></a>

```typescript
public resetOnDatabase(): void
```

##### `resetOnFunction` <a name="resetOnFunction" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnFunction"></a>

```typescript
public resetOnFunction(): void
```

##### `resetOnSchema` <a name="resetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema"></a>

```typescript
public resetOnSchema(): void
```

##### `resetOnTable` <a name="resetOnTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable"></a>

```typescript
public resetOnTable(): void
```

##### `resetOnTag` <a name="resetOnTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag"></a>

```typescript
public resetOnTag(): void
```

##### `resetOnView` <a name="resetOnView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView"></a>

```typescript
public resetOnView(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantPrivilegesToShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantPrivilegesToShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference">GrantPrivilegesToShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput">onAllTablesInSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput">onDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunctionInput">onFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput">onSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput">onTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput">onTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput">onViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput">toShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema">onAllTablesInSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase">onDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunction">onFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema">onSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable">onTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag">onTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView">onView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare">toShare</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeouts"></a>

```typescript
public readonly timeouts: GrantPrivilegesToShareTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference">GrantPrivilegesToShareTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onAllTablesInSchemaInput`<sup>Optional</sup> <a name="onAllTablesInSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput"></a>

```typescript
public readonly onAllTablesInSchemaInput: string;
```

- *Type:* string

---

##### `onDatabaseInput`<sup>Optional</sup> <a name="onDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput"></a>

```typescript
public readonly onDatabaseInput: string;
```

- *Type:* string

---

##### `onFunctionInput`<sup>Optional</sup> <a name="onFunctionInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunctionInput"></a>

```typescript
public readonly onFunctionInput: string;
```

- *Type:* string

---

##### `onSchemaInput`<sup>Optional</sup> <a name="onSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput"></a>

```typescript
public readonly onSchemaInput: string;
```

- *Type:* string

---

##### `onTableInput`<sup>Optional</sup> <a name="onTableInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput"></a>

```typescript
public readonly onTableInput: string;
```

- *Type:* string

---

##### `onTagInput`<sup>Optional</sup> <a name="onTagInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput"></a>

```typescript
public readonly onTagInput: string;
```

- *Type:* string

---

##### `onViewInput`<sup>Optional</sup> <a name="onViewInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput"></a>

```typescript
public readonly onViewInput: string;
```

- *Type:* string

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GrantPrivilegesToShareTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---

##### `toShareInput`<sup>Optional</sup> <a name="toShareInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput"></a>

```typescript
public readonly toShareInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onAllTablesInSchema`<sup>Required</sup> <a name="onAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema"></a>

```typescript
public readonly onAllTablesInSchema: string;
```

- *Type:* string

---

##### `onDatabase`<sup>Required</sup> <a name="onDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase"></a>

```typescript
public readonly onDatabase: string;
```

- *Type:* string

---

##### `onFunction`<sup>Required</sup> <a name="onFunction" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunction"></a>

```typescript
public readonly onFunction: string;
```

- *Type:* string

---

##### `onSchema`<sup>Required</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema"></a>

```typescript
public readonly onSchema: string;
```

- *Type:* string

---

##### `onTable`<sup>Required</sup> <a name="onTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable"></a>

```typescript
public readonly onTable: string;
```

- *Type:* string

---

##### `onTag`<sup>Required</sup> <a name="onTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag"></a>

```typescript
public readonly onTag: string;
```

- *Type:* string

---

##### `onView`<sup>Required</sup> <a name="onView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView"></a>

```typescript
public readonly onView: string;
```

- *Type:* string

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `toShare`<sup>Required</sup> <a name="toShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare"></a>

```typescript
public readonly toShare: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToShareConfig <a name="GrantPrivilegesToShareConfig" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.Initializer"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

const grantPrivilegesToShareConfig: grantPrivilegesToShare.GrantPrivilegesToShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges">privileges</a></code> | <code>string[]</code> | The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare">toShare</a></code> | <code>string</code> | The fully qualified name of the share on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema">onAllTablesInSchema</a></code> | <code>string</code> | The fully qualified identifier for the schema for which the specified privilege will be granted for all tables. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase">onDatabase</a></code> | <code>string</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onFunction">onFunction</a></code> | <code>string</code> | The fully qualified name of the function on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema">onSchema</a></code> | <code>string</code> | The fully qualified name of the schema on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable">onTable</a></code> | <code>string</code> | The fully qualified name of the table on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag">onTag</a></code> | <code>string</code> | The fully qualified name of the tag on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView">onView</a></code> | <code>string</code> | The fully qualified name of the view on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#privileges GrantPrivilegesToShare#privileges}

---

##### `toShare`<sup>Required</sup> <a name="toShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare"></a>

```typescript
public readonly toShare: string;
```

- *Type:* string

The fully qualified name of the share on which privileges will be granted.

For more information about this resource, see [docs](./share).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#to_share GrantPrivilegesToShare#to_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onAllTablesInSchema`<sup>Optional</sup> <a name="onAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema"></a>

```typescript
public readonly onAllTablesInSchema: string;
```

- *Type:* string

The fully qualified identifier for the schema for which the specified privilege will be granted for all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_all_tables_in_schema GrantPrivilegesToShare#on_all_tables_in_schema}

---

##### `onDatabase`<sup>Optional</sup> <a name="onDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase"></a>

```typescript
public readonly onDatabase: string;
```

- *Type:* string

The fully qualified name of the database on which privileges will be granted.

For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_database GrantPrivilegesToShare#on_database}

---

##### `onFunction`<sup>Optional</sup> <a name="onFunction" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onFunction"></a>

```typescript
public readonly onFunction: string;
```

- *Type:* string

The fully qualified name of the function on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_function GrantPrivilegesToShare#on_function}

---

##### `onSchema`<sup>Optional</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema"></a>

```typescript
public readonly onSchema: string;
```

- *Type:* string

The fully qualified name of the schema on which privileges will be granted.

For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_schema GrantPrivilegesToShare#on_schema}

---

##### `onTable`<sup>Optional</sup> <a name="onTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable"></a>

```typescript
public readonly onTable: string;
```

- *Type:* string

The fully qualified name of the table on which privileges will be granted.

For more information about this resource, see [docs](./table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_table GrantPrivilegesToShare#on_table}

---

##### `onTag`<sup>Optional</sup> <a name="onTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag"></a>

```typescript
public readonly onTag: string;
```

- *Type:* string

The fully qualified name of the tag on which privileges will be granted.

For more information about this resource, see [docs](./tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_tag GrantPrivilegesToShare#on_tag}

---

##### `onView`<sup>Optional</sup> <a name="onView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView"></a>

```typescript
public readonly onView: string;
```

- *Type:* string

The fully qualified name of the view on which privileges will be granted.

For more information about this resource, see [docs](./view).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#on_view GrantPrivilegesToShare#on_view}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GrantPrivilegesToShareTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#timeouts GrantPrivilegesToShare#timeouts}

---

### GrantPrivilegesToShareTimeouts <a name="GrantPrivilegesToShareTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.Initializer"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

const grantPrivilegesToShareTimeouts: grantPrivilegesToShare.GrantPrivilegesToShareTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#create GrantPrivilegesToShare#create}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#delete GrantPrivilegesToShare#delete}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#read GrantPrivilegesToShare#read}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#update GrantPrivilegesToShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#create GrantPrivilegesToShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#delete GrantPrivilegesToShare#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#read GrantPrivilegesToShare#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/grant_privileges_to_share#update GrantPrivilegesToShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToShareTimeoutsOutputReference <a name="GrantPrivilegesToShareTimeoutsOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer"></a>

```typescript
import { grantPrivilegesToShare } from '@cdktf/provider-snowflake'

new grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrantPrivilegesToShareTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---



