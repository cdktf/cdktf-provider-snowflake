# `grantPrivilegesToRole` Submodule <a name="`grantPrivilegesToRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToRole <a name="GrantPrivilegesToRole" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role snowflake_grant_privileges_to_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

new grantPrivilegesToRole.GrantPrivilegesToRole(scope: Construct, id: string, config: GrantPrivilegesToRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig">GrantPrivilegesToRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig">GrantPrivilegesToRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject">putOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema">putOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject">putOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetAllPrivileges">resetAllPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccount">resetOnAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccountObject">resetOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchema">resetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchemaObject">resetOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetPrivileges">resetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnAccountObject` <a name="putOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject"></a>

```typescript
public putOnAccountObject(value: GrantPrivilegesToRoleOnAccountObject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---

##### `putOnSchema` <a name="putOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema"></a>

```typescript
public putOnSchema(value: GrantPrivilegesToRoleOnSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---

##### `putOnSchemaObject` <a name="putOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject"></a>

```typescript
public putOnSchemaObject(value: GrantPrivilegesToRoleOnSchemaObject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---

##### `resetAllPrivileges` <a name="resetAllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetAllPrivileges"></a>

```typescript
public resetAllPrivileges(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnAccount` <a name="resetOnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccount"></a>

```typescript
public resetOnAccount(): void
```

##### `resetOnAccountObject` <a name="resetOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccountObject"></a>

```typescript
public resetOnAccountObject(): void
```

##### `resetOnSchema` <a name="resetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchema"></a>

```typescript
public resetOnSchema(): void
```

##### `resetOnSchemaObject` <a name="resetOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchemaObject"></a>

```typescript
public resetOnSchemaObject(): void
```

##### `resetPrivileges` <a name="resetPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetPrivileges"></a>

```typescript
public resetPrivileges(): void
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantPrivilegesToRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantPrivilegesToRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObject">onAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference">GrantPrivilegesToRoleOnAccountObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchema">onSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference">GrantPrivilegesToRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObject">onSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference">GrantPrivilegesToRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivilegesInput">allPrivilegesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountInput">onAccountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObjectInput">onAccountObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaInput">onSchemaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObjectInput">onSchemaObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivileges">allPrivileges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccount">onAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onAccountObject`<sup>Required</sup> <a name="onAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObject"></a>

```typescript
public readonly onAccountObject: GrantPrivilegesToRoleOnAccountObjectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference">GrantPrivilegesToRoleOnAccountObjectOutputReference</a>

---

##### `onSchema`<sup>Required</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchema"></a>

```typescript
public readonly onSchema: GrantPrivilegesToRoleOnSchemaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference">GrantPrivilegesToRoleOnSchemaOutputReference</a>

---

##### `onSchemaObject`<sup>Required</sup> <a name="onSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObject"></a>

```typescript
public readonly onSchemaObject: GrantPrivilegesToRoleOnSchemaObjectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference">GrantPrivilegesToRoleOnSchemaObjectOutputReference</a>

---

##### `allPrivilegesInput`<sup>Optional</sup> <a name="allPrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivilegesInput"></a>

```typescript
public readonly allPrivilegesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onAccountInput`<sup>Optional</sup> <a name="onAccountInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountInput"></a>

```typescript
public readonly onAccountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onAccountObjectInput`<sup>Optional</sup> <a name="onAccountObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObjectInput"></a>

```typescript
public readonly onAccountObjectInput: GrantPrivilegesToRoleOnAccountObject;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---

##### `onSchemaInput`<sup>Optional</sup> <a name="onSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaInput"></a>

```typescript
public readonly onSchemaInput: GrantPrivilegesToRoleOnSchema;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---

##### `onSchemaObjectInput`<sup>Optional</sup> <a name="onSchemaObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObjectInput"></a>

```typescript
public readonly onSchemaObjectInput: GrantPrivilegesToRoleOnSchemaObject;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOptionInput"></a>

```typescript
public readonly withGrantOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allPrivileges`<sup>Required</sup> <a name="allPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivileges"></a>

```typescript
public readonly allPrivileges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onAccount`<sup>Required</sup> <a name="onAccount" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccount"></a>

```typescript
public readonly onAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToRoleConfig <a name="GrantPrivilegesToRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

const grantPrivilegesToRoleConfig: grantPrivilegesToRole.GrantPrivilegesToRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | The fully qualified name of the role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.allPrivileges">allPrivileges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccount">onAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccountObject">onAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchema">onSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchemaObject">onSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.privileges">privileges</a></code> | <code>string[]</code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The fully qualified name of the role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#role_name GrantPrivilegesToRole#role_name}

---

##### `allPrivileges`<sup>Optional</sup> <a name="allPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.allPrivileges"></a>

```typescript
public readonly allPrivileges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#all_privileges GrantPrivilegesToRole#all_privileges}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onAccount`<sup>Optional</sup> <a name="onAccount" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccount"></a>

```typescript
public readonly onAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#on_account GrantPrivilegesToRole#on_account}

---

##### `onAccountObject`<sup>Optional</sup> <a name="onAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccountObject"></a>

```typescript
public readonly onAccountObject: GrantPrivilegesToRoleOnAccountObject;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#on_account_object GrantPrivilegesToRole#on_account_object}

---

##### `onSchema`<sup>Optional</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchema"></a>

```typescript
public readonly onSchema: GrantPrivilegesToRoleOnSchema;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#on_schema GrantPrivilegesToRole#on_schema}

---

##### `onSchemaObject`<sup>Optional</sup> <a name="onSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchemaObject"></a>

```typescript
public readonly onSchemaObject: GrantPrivilegesToRoleOnSchemaObject;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#on_schema_object GrantPrivilegesToRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#privileges GrantPrivilegesToRole#privileges}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#with_grant_option GrantPrivilegesToRole#with_grant_option}

---

### GrantPrivilegesToRoleOnAccountObject <a name="GrantPrivilegesToRoleOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

const grantPrivilegesToRoleOnAccountObject: grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectName">objectName</a></code> | <code>string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectType">objectType</a></code> | <code>string</code> | The object type of the account object on which privileges will be granted. |

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

### GrantPrivilegesToRoleOnSchema <a name="GrantPrivilegesToRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

const grantPrivilegesToRoleOnSchema: grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.allSchemasInDatabase">allSchemasInDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.futureSchemasInDatabase">futureSchemasInDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.schemaName">schemaName</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `allSchemasInDatabase`<sup>Optional</sup> <a name="allSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.allSchemasInDatabase"></a>

```typescript
public readonly allSchemasInDatabase: string;
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#all_schemas_in_database GrantPrivilegesToRole#all_schemas_in_database}

---

##### `futureSchemasInDatabase`<sup>Optional</sup> <a name="futureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.futureSchemasInDatabase"></a>

```typescript
public readonly futureSchemasInDatabase: string;
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#future_schemas_in_database GrantPrivilegesToRole#future_schemas_in_database}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#schema_name GrantPrivilegesToRole#schema_name}

---

### GrantPrivilegesToRoleOnSchemaObject <a name="GrantPrivilegesToRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

const grantPrivilegesToRoleOnSchemaObject: grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectName">objectName</a></code> | <code>string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectType">objectType</a></code> | <code>string</code> | The object type of the schema object on which privileges will be granted. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.all"></a>

```typescript
public readonly all: GrantPrivilegesToRoleOnSchemaObjectAll;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#all GrantPrivilegesToRole#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.future"></a>

```typescript
public readonly future: GrantPrivilegesToRoleOnSchemaObjectFuture;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#future GrantPrivilegesToRole#future}

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

The object type of the schema object on which privileges will be granted.

Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

### GrantPrivilegesToRoleOnSchemaObjectAll <a name="GrantPrivilegesToRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

const grantPrivilegesToRoleOnSchemaObjectAll: grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inDatabase">inDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inSchema">inSchema</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

### GrantPrivilegesToRoleOnSchemaObjectFuture <a name="GrantPrivilegesToRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

const grantPrivilegesToRoleOnSchemaObjectFuture: grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inDatabase">inDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inSchema">inSchema</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToRoleOnAccountObjectOutputReference <a name="GrantPrivilegesToRoleOnAccountObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

new grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectNameInput"></a>

```typescript
public readonly objectNameInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantPrivilegesToRoleOnAccountObject;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---


### GrantPrivilegesToRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

new grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```typescript
public resetInDatabase(): void
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```typescript
public resetInSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabase">inDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchema">inSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```typescript
public readonly inDatabaseInput: string;
```

- *Type:* string

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```typescript
public readonly inSchemaInput: string;
```

- *Type:* string

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```typescript
public readonly objectTypePluralInput: string;
```

- *Type:* string

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantPrivilegesToRoleOnSchemaObjectAll;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

new grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```typescript
public resetInDatabase(): void
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```typescript
public resetInSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabase">inDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchema">inSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```typescript
public readonly inDatabaseInput: string;
```

- *Type:* string

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```typescript
public readonly inSchemaInput: string;
```

- *Type:* string

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```typescript
public readonly objectTypePluralInput: string;
```

- *Type:* string

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantPrivilegesToRoleOnSchemaObjectFuture;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

new grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll">putAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture">putFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetFuture">resetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectType">resetObjectType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAll` <a name="putAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll"></a>

```typescript
public putAll(value: GrantPrivilegesToRoleOnSchemaObjectAll): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---

##### `putFuture` <a name="putFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture"></a>

```typescript
public putFuture(value: GrantPrivilegesToRoleOnSchemaObjectFuture): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---

##### `resetAll` <a name="resetAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetFuture` <a name="resetFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetFuture"></a>

```typescript
public resetFuture(): void
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```typescript
public resetObjectName(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```typescript
public resetObjectType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.allInput">allInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.futureInput">futureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.all"></a>

```typescript
public readonly all: GrantPrivilegesToRoleOnSchemaObjectAllOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToRoleOnSchemaObjectAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.future"></a>

```typescript
public readonly future: GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference</a>

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.allInput"></a>

```typescript
public readonly allInput: GrantPrivilegesToRoleOnSchemaObjectAll;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---

##### `futureInput`<sup>Optional</sup> <a name="futureInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```typescript
public readonly futureInput: GrantPrivilegesToRoleOnSchemaObjectFuture;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```typescript
public readonly objectNameInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantPrivilegesToRoleOnSchemaObject;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---


### GrantPrivilegesToRoleOnSchemaOutputReference <a name="GrantPrivilegesToRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer"></a>

```typescript
import { grantPrivilegesToRole } from '@cdktf/provider-snowflake'

new grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetAllSchemasInDatabase">resetAllSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">resetFutureSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllSchemasInDatabase` <a name="resetAllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```typescript
public resetAllSchemasInDatabase(): void
```

##### `resetFutureSchemasInDatabase` <a name="resetFutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```typescript
public resetFutureSchemasInDatabase(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">allSchemasInDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">futureSchemasInDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabase">allSchemasInDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabase">futureSchemasInDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allSchemasInDatabaseInput`<sup>Optional</sup> <a name="allSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```typescript
public readonly allSchemasInDatabaseInput: string;
```

- *Type:* string

---

##### `futureSchemasInDatabaseInput`<sup>Optional</sup> <a name="futureSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```typescript
public readonly futureSchemasInDatabaseInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `allSchemasInDatabase`<sup>Required</sup> <a name="allSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```typescript
public readonly allSchemasInDatabase: string;
```

- *Type:* string

---

##### `futureSchemasInDatabase`<sup>Required</sup> <a name="futureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```typescript
public readonly futureSchemasInDatabase: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantPrivilegesToRoleOnSchema;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---



