# `procedurePython` Submodule <a name="`procedurePython` Submodule" id="@cdktf/provider-snowflake.procedurePython"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedurePython <a name="ProcedurePython" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python snowflake_procedure_python}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePython(scope: Construct, id: string, config: ProcedurePythonConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig">ProcedurePythonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig">ProcedurePythonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.putImports">putImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetEnableConsoleOutput">resetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetExecuteAs">resetExecuteAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetExternalAccessIntegrations">resetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetImports">resetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetMetricLevel">resetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetPackages">resetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetProcedureDefinition">resetProcedureDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putArguments"></a>

```typescript
public putArguments(value: IResolvable | ProcedurePythonArguments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putArguments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]

---

##### `putImports` <a name="putImports" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putImports"></a>

```typescript
public putImports(value: IResolvable | ProcedurePythonImports[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putImports.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putSecrets"></a>

```typescript
public putSecrets(value: IResolvable | ProcedurePythonSecrets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putSecrets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putTimeouts"></a>

```typescript
public putTimeouts(value: ProcedurePythonTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnableConsoleOutput` <a name="resetEnableConsoleOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetEnableConsoleOutput"></a>

```typescript
public resetEnableConsoleOutput(): void
```

##### `resetExecuteAs` <a name="resetExecuteAs" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetExecuteAs"></a>

```typescript
public resetExecuteAs(): void
```

##### `resetExternalAccessIntegrations` <a name="resetExternalAccessIntegrations" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetExternalAccessIntegrations"></a>

```typescript
public resetExternalAccessIntegrations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImports` <a name="resetImports" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetImports"></a>

```typescript
public resetImports(): void
```

##### `resetIsSecure` <a name="resetIsSecure" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetIsSecure"></a>

```typescript
public resetIsSecure(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMetricLevel` <a name="resetMetricLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetMetricLevel"></a>

```typescript
public resetMetricLevel(): void
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetNullInputBehavior"></a>

```typescript
public resetNullInputBehavior(): void
```

##### `resetPackages` <a name="resetPackages" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetPackages"></a>

```typescript
public resetPackages(): void
```

##### `resetProcedureDefinition` <a name="resetProcedureDefinition" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetProcedureDefinition"></a>

```typescript
public resetProcedureDefinition(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.resetTraceLevel"></a>

```typescript
public resetTraceLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProcedurePython resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.isConstruct"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

procedurePython.ProcedurePython.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.isTerraformElement"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

procedurePython.ProcedurePython.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.isTerraformResource"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

procedurePython.ProcedurePython.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.generateConfigForImport"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

procedurePython.ProcedurePython.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProcedurePython resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProcedurePython to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProcedurePython that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProcedurePython to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList">ProcedurePythonArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList">ProcedurePythonImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList">ProcedurePythonParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.procedureLanguage">procedureLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList">ProcedurePythonSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList">ProcedurePythonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference">ProcedurePythonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.argumentsInput">argumentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.enableConsoleOutputInput">enableConsoleOutputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.executeAsInput">executeAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.externalAccessIntegrationsInput">externalAccessIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.importsInput">importsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.isSecureInput">isSecureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.metricLevelInput">metricLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.packagesInput">packagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.procedureDefinitionInput">procedureDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.returnTypeInput">returnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.secretsInput">secretsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.snowparkPackageInput">snowparkPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.traceLevelInput">traceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.executeAs">executeAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.isSecure">isSecure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.metricLevel">metricLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.nullInputBehavior">nullInputBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.procedureDefinition">procedureDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.snowparkPackage">snowparkPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.traceLevel">traceLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.arguments"></a>

```typescript
public readonly arguments: ProcedurePythonArgumentsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList">ProcedurePythonArgumentsList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.imports"></a>

```typescript
public readonly imports: ProcedurePythonImportsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList">ProcedurePythonImportsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.parameters"></a>

```typescript
public readonly parameters: ProcedurePythonParametersList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList">ProcedurePythonParametersList</a>

---

##### `procedureLanguage`<sup>Required</sup> <a name="procedureLanguage" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.procedureLanguage"></a>

```typescript
public readonly procedureLanguage: string;
```

- *Type:* string

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.secrets"></a>

```typescript
public readonly secrets: ProcedurePythonSecretsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList">ProcedurePythonSecretsList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.showOutput"></a>

```typescript
public readonly showOutput: ProcedurePythonShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList">ProcedurePythonShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.timeouts"></a>

```typescript
public readonly timeouts: ProcedurePythonTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference">ProcedurePythonTimeoutsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: IResolvable | ProcedurePythonArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `enableConsoleOutputInput`<sup>Optional</sup> <a name="enableConsoleOutputInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.enableConsoleOutputInput"></a>

```typescript
public readonly enableConsoleOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executeAsInput`<sup>Optional</sup> <a name="executeAsInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.executeAsInput"></a>

```typescript
public readonly executeAsInput: string;
```

- *Type:* string

---

##### `externalAccessIntegrationsInput`<sup>Optional</sup> <a name="externalAccessIntegrationsInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.externalAccessIntegrationsInput"></a>

```typescript
public readonly externalAccessIntegrationsInput: string[];
```

- *Type:* string[]

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.importsInput"></a>

```typescript
public readonly importsInput: IResolvable | ProcedurePythonImports[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.isSecureInput"></a>

```typescript
public readonly isSecureInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `metricLevelInput`<sup>Optional</sup> <a name="metricLevelInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.metricLevelInput"></a>

```typescript
public readonly metricLevelInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.nullInputBehaviorInput"></a>

```typescript
public readonly nullInputBehaviorInput: string;
```

- *Type:* string

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.packagesInput"></a>

```typescript
public readonly packagesInput: string[];
```

- *Type:* string[]

---

##### `procedureDefinitionInput`<sup>Optional</sup> <a name="procedureDefinitionInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.procedureDefinitionInput"></a>

```typescript
public readonly procedureDefinitionInput: string;
```

- *Type:* string

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.returnTypeInput"></a>

```typescript
public readonly returnTypeInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.secretsInput"></a>

```typescript
public readonly secretsInput: IResolvable | ProcedurePythonSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]

---

##### `snowparkPackageInput`<sup>Optional</sup> <a name="snowparkPackageInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.snowparkPackageInput"></a>

```typescript
public readonly snowparkPackageInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ProcedurePythonTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a>

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.traceLevelInput"></a>

```typescript
public readonly traceLevelInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executeAs`<sup>Required</sup> <a name="executeAs" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.executeAs"></a>

```typescript
public readonly executeAs: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.isSecure"></a>

```typescript
public readonly isSecure: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.metricLevel"></a>

```typescript
public readonly metricLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.nullInputBehavior"></a>

```typescript
public readonly nullInputBehavior: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `procedureDefinition`<sup>Required</sup> <a name="procedureDefinition" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.procedureDefinition"></a>

```typescript
public readonly procedureDefinition: string;
```

- *Type:* string

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `snowparkPackage`<sup>Required</sup> <a name="snowparkPackage" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.snowparkPackage"></a>

```typescript
public readonly snowparkPackage: string;
```

- *Type:* string

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.procedurePython.ProcedurePython.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedurePythonArguments <a name="ProcedurePythonArguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonArguments: procedurePython.ProcedurePythonArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.property.argDataType">argDataType</a></code> | <code>string</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.property.argName">argName</a></code> | <code>string</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.property.argDefaultValue">argDefaultValue</a></code> | <code>string</code> | Optional default value for the argument. |

---

##### `argDataType`<sup>Required</sup> <a name="argDataType" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.property.argDataType"></a>

```typescript
public readonly argDataType: string;
```

- *Type:* string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#arg_data_type ProcedurePython#arg_data_type}

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.property.argName"></a>

```typescript
public readonly argName: string;
```

- *Type:* string

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the procedure definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#arg_name ProcedurePython#arg_name}

---

##### `argDefaultValue`<sup>Optional</sup> <a name="argDefaultValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments.property.argDefaultValue"></a>

```typescript
public readonly argDefaultValue: string;
```

- *Type:* string

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#arg_default_value ProcedurePython#arg_default_value}

---

### ProcedurePythonConfig <a name="ProcedurePythonConfig" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonConfig: procedurePython.ProcedurePythonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.handler">handler</a></code> | <code>string</code> | Use the name of the stored procedure’s function or method. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.name">name</a></code> | <code>string</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.returnType">returnType</a></code> | <code>string</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The language runtime version to use. Currently, the supported versions are: 3.9, 3.10, and 3.11. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.snowparkPackage">snowparkPackage</a></code> | <code>string</code> | The Snowpark package is required for stored procedures, so it must always be present. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.arguments">arguments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.comment">comment</a></code> | <code>string</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.executeAs">executeAs</a></code> | <code>string</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#id ProcedurePython#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.imports">imports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.isSecure">isSecure</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.logLevel">logLevel</a></code> | <code>string</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.metricLevel">metricLevel</a></code> | <code>string</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>string</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.packages">packages</a></code> | <code>string[]</code> | List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.procedureDefinition">procedureDefinition</a></code> | <code>string</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.secrets">secrets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.traceLevel">traceLevel</a></code> | <code>string</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#database ProcedurePython#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

Use the name of the stored procedure’s function or method.

This can differ depending on whether the code is in-line or referenced at a stage. When the code is in-line, you can specify just the function name. When the code is imported from a stage, specify the fully-qualified handler function name as `<module_name>.<function_name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#handler ProcedurePython#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#name ProcedurePython#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL-Python Data Type Mappings](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-data-type-mapping.html#label-sql-python-data-type-mappings)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#return_type ProcedurePython#return_type}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The language runtime version to use. Currently, the supported versions are: 3.9, 3.10, and 3.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#runtime_version ProcedurePython#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#schema ProcedurePython#schema}

---

##### `snowparkPackage`<sup>Required</sup> <a name="snowparkPackage" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.snowparkPackage"></a>

```typescript
public readonly snowparkPackage: string;
```

- *Type:* string

The Snowpark package is required for stored procedures, so it must always be present.

For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#snowpark_package ProcedurePython#snowpark_package}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.arguments"></a>

```typescript
public readonly arguments: IResolvable | ProcedurePythonArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#arguments ProcedurePython#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#comment ProcedurePython#comment}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#enable_console_output ProcedurePython#enable_console_output}

---

##### `executeAs`<sup>Optional</sup> <a name="executeAs" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.executeAs"></a>

```typescript
public readonly executeAs: string;
```

- *Type:* string

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#execute_as ProcedurePython#execute_as}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#external_access_integrations ProcedurePython#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#id ProcedurePython#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.imports"></a>

```typescript
public readonly imports: IResolvable | ProcedurePythonImports[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#imports ProcedurePython#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.isSecure"></a>

```typescript
public readonly isSecure: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#is_secure ProcedurePython#is_secure}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#log_level ProcedurePython#log_level}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.metricLevel"></a>

```typescript
public readonly metricLevel: string;
```

- *Type:* string

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#metric_level ProcedurePython#metric_level}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.nullInputBehavior"></a>

```typescript
public readonly nullInputBehavior: string;
```

- *Type:* string

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#null_input_behavior ProcedurePython#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment.

The Snowpark package is required for stored procedures, but is specified in the `snowpark_package` attribute. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#packages ProcedurePython#packages}

---

##### `procedureDefinition`<sup>Optional</sup> <a name="procedureDefinition" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.procedureDefinition"></a>

```typescript
public readonly procedureDefinition: string;
```

- *Type:* string

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be Python source code. For more information, see [Python (using Snowpark)](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-overview). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#procedure_definition ProcedurePython#procedure_definition}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.secrets"></a>

```typescript
public readonly secrets: IResolvable | ProcedurePythonSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#secrets ProcedurePython#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ProcedurePythonTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#timeouts ProcedurePython#timeouts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonConfig.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#trace_level ProcedurePython#trace_level}

---

### ProcedurePythonImports <a name="ProcedurePythonImports" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonImports: procedurePython.ProcedurePythonImports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports.property.pathOnStage">pathOnStage</a></code> | <code>string</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports.property.stageLocation">stageLocation</a></code> | <code>string</code> | Stage location without leading `@`. |

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports.property.pathOnStage"></a>

```typescript
public readonly pathOnStage: string;
```

- *Type:* string

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#path_on_stage ProcedurePython#path_on_stage}

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports.property.stageLocation"></a>

```typescript
public readonly stageLocation: string;
```

- *Type:* string

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#stage_location ProcedurePython#stage_location}

---

### ProcedurePythonParameters <a name="ProcedurePythonParameters" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParameters.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonParameters: procedurePython.ProcedurePythonParameters = { ... }
```


### ProcedurePythonParametersEnableConsoleOutput <a name="ProcedurePythonParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutput.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonParametersEnableConsoleOutput: procedurePython.ProcedurePythonParametersEnableConsoleOutput = { ... }
```


### ProcedurePythonParametersLogLevel <a name="ProcedurePythonParametersLogLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevel.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonParametersLogLevel: procedurePython.ProcedurePythonParametersLogLevel = { ... }
```


### ProcedurePythonParametersMetricLevel <a name="ProcedurePythonParametersMetricLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevel.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonParametersMetricLevel: procedurePython.ProcedurePythonParametersMetricLevel = { ... }
```


### ProcedurePythonParametersTraceLevel <a name="ProcedurePythonParametersTraceLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevel.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonParametersTraceLevel: procedurePython.ProcedurePythonParametersTraceLevel = { ... }
```


### ProcedurePythonSecrets <a name="ProcedurePythonSecrets" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonSecrets: procedurePython.ProcedurePythonSecrets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets.property.secretId">secretId</a></code> | <code>string</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets.property.secretVariableName">secretVariableName</a></code> | <code>string</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#secret_id ProcedurePython#secret_id}

---

##### `secretVariableName`<sup>Required</sup> <a name="secretVariableName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets.property.secretVariableName"></a>

```typescript
public readonly secretVariableName: string;
```

- *Type:* string

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#secret_variable_name ProcedurePython#secret_variable_name}

---

### ProcedurePythonShowOutput <a name="ProcedurePythonShowOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutput.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonShowOutput: procedurePython.ProcedurePythonShowOutput = { ... }
```


### ProcedurePythonTimeouts <a name="ProcedurePythonTimeouts" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

const procedurePythonTimeouts: procedurePython.ProcedurePythonTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#create ProcedurePython#create}. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#delete ProcedurePython#delete}. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#read ProcedurePython#read}. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#update ProcedurePython#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#create ProcedurePython#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#delete ProcedurePython#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#read ProcedurePython#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_python#update ProcedurePython#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProcedurePythonArgumentsList <a name="ProcedurePythonArgumentsList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.get"></a>

```typescript
public get(index: number): ProcedurePythonArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>[]

---


### ProcedurePythonArgumentsOutputReference <a name="ProcedurePythonArgumentsOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.resetArgDefaultValue">resetArgDefaultValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgDefaultValue` <a name="resetArgDefaultValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.resetArgDefaultValue"></a>

```typescript
public resetArgDefaultValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDataTypeInput">argDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDefaultValueInput">argDefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argNameInput">argNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDataType">argDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDefaultValue">argDefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argName">argName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argDataTypeInput`<sup>Optional</sup> <a name="argDataTypeInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDataTypeInput"></a>

```typescript
public readonly argDataTypeInput: string;
```

- *Type:* string

---

##### `argDefaultValueInput`<sup>Optional</sup> <a name="argDefaultValueInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDefaultValueInput"></a>

```typescript
public readonly argDefaultValueInput: string;
```

- *Type:* string

---

##### `argNameInput`<sup>Optional</sup> <a name="argNameInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argNameInput"></a>

```typescript
public readonly argNameInput: string;
```

- *Type:* string

---

##### `argDataType`<sup>Required</sup> <a name="argDataType" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDataType"></a>

```typescript
public readonly argDataType: string;
```

- *Type:* string

---

##### `argDefaultValue`<sup>Required</sup> <a name="argDefaultValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argDefaultValue"></a>

```typescript
public readonly argDefaultValue: string;
```

- *Type:* string

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.argName"></a>

```typescript
public readonly argName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonArguments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonArguments">ProcedurePythonArguments</a>

---


### ProcedurePythonImportsList <a name="ProcedurePythonImportsList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonImportsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.get"></a>

```typescript
public get(index: number): ProcedurePythonImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonImports[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>[]

---


### ProcedurePythonImportsOutputReference <a name="ProcedurePythonImportsOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonImportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.pathOnStageInput">pathOnStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.stageLocationInput">stageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.pathOnStage">pathOnStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.stageLocation">stageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathOnStageInput`<sup>Optional</sup> <a name="pathOnStageInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.pathOnStageInput"></a>

```typescript
public readonly pathOnStageInput: string;
```

- *Type:* string

---

##### `stageLocationInput`<sup>Optional</sup> <a name="stageLocationInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.stageLocationInput"></a>

```typescript
public readonly stageLocationInput: string;
```

- *Type:* string

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.pathOnStage"></a>

```typescript
public readonly pathOnStage: string;
```

- *Type:* string

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.stageLocation"></a>

```typescript
public readonly stageLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonImportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonImports;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonImports">ProcedurePythonImports</a>

---


### ProcedurePythonParametersEnableConsoleOutputList <a name="ProcedurePythonParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersEnableConsoleOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.get"></a>

```typescript
public get(index: number): ProcedurePythonParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProcedurePythonParametersEnableConsoleOutputOutputReference <a name="ProcedurePythonParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutput">ProcedurePythonParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProcedurePythonParametersEnableConsoleOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutput">ProcedurePythonParametersEnableConsoleOutput</a>

---


### ProcedurePythonParametersList <a name="ProcedurePythonParametersList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.get"></a>

```typescript
public get(index: number): ProcedurePythonParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProcedurePythonParametersLogLevelList <a name="ProcedurePythonParametersLogLevelList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersLogLevelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.get"></a>

```typescript
public get(index: number): ProcedurePythonParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProcedurePythonParametersLogLevelOutputReference <a name="ProcedurePythonParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersLogLevelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevel">ProcedurePythonParametersLogLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProcedurePythonParametersLogLevel;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevel">ProcedurePythonParametersLogLevel</a>

---


### ProcedurePythonParametersMetricLevelList <a name="ProcedurePythonParametersMetricLevelList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersMetricLevelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.get"></a>

```typescript
public get(index: number): ProcedurePythonParametersMetricLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProcedurePythonParametersMetricLevelOutputReference <a name="ProcedurePythonParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersMetricLevelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevel">ProcedurePythonParametersMetricLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProcedurePythonParametersMetricLevel;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevel">ProcedurePythonParametersMetricLevel</a>

---


### ProcedurePythonParametersOutputReference <a name="ProcedurePythonParametersOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList">ProcedurePythonParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.logLevel">logLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList">ProcedurePythonParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.metricLevel">metricLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList">ProcedurePythonParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.traceLevel">traceLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList">ProcedurePythonParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParameters">ProcedurePythonParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: ProcedurePythonParametersEnableConsoleOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersEnableConsoleOutputList">ProcedurePythonParametersEnableConsoleOutputList</a>

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: ProcedurePythonParametersLogLevelList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersLogLevelList">ProcedurePythonParametersLogLevelList</a>

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.metricLevel"></a>

```typescript
public readonly metricLevel: ProcedurePythonParametersMetricLevelList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersMetricLevelList">ProcedurePythonParametersMetricLevelList</a>

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.traceLevel"></a>

```typescript
public readonly traceLevel: ProcedurePythonParametersTraceLevelList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList">ProcedurePythonParametersTraceLevelList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProcedurePythonParameters;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParameters">ProcedurePythonParameters</a>

---


### ProcedurePythonParametersTraceLevelList <a name="ProcedurePythonParametersTraceLevelList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersTraceLevelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.get"></a>

```typescript
public get(index: number): ProcedurePythonParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProcedurePythonParametersTraceLevelOutputReference <a name="ProcedurePythonParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonParametersTraceLevelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevel">ProcedurePythonParametersTraceLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProcedurePythonParametersTraceLevel;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonParametersTraceLevel">ProcedurePythonParametersTraceLevel</a>

---


### ProcedurePythonSecretsList <a name="ProcedurePythonSecretsList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.get"></a>

```typescript
public get(index: number): ProcedurePythonSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>[]

---


### ProcedurePythonSecretsOutputReference <a name="ProcedurePythonSecretsOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretVariableNameInput">secretVariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretVariableName">secretVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `secretVariableNameInput`<sup>Optional</sup> <a name="secretVariableNameInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretVariableNameInput"></a>

```typescript
public readonly secretVariableNameInput: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretVariableName`<sup>Required</sup> <a name="secretVariableName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.secretVariableName"></a>

```typescript
public readonly secretVariableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonSecrets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonSecrets">ProcedurePythonSecrets</a>

---


### ProcedurePythonShowOutputList <a name="ProcedurePythonShowOutputList" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.get"></a>

```typescript
public get(index: number): ProcedurePythonShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProcedurePythonShowOutputOutputReference <a name="ProcedurePythonShowOutputOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.argumentsRaw">argumentsRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isAggregate">isAggregate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isAnsi">isAnsi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isBuiltin">isBuiltin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isSecure">isSecure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isTableFunction">isTableFunction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.maxNumArguments">maxNumArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.minNumArguments">minNumArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.secrets">secrets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.validForClustering">validForClustering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutput">ProcedurePythonShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentsRaw`<sup>Required</sup> <a name="argumentsRaw" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.argumentsRaw"></a>

```typescript
public readonly argumentsRaw: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string;
```

- *Type:* string

---

##### `isAggregate`<sup>Required</sup> <a name="isAggregate" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isAggregate"></a>

```typescript
public readonly isAggregate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isAnsi`<sup>Required</sup> <a name="isAnsi" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isAnsi"></a>

```typescript
public readonly isAnsi: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBuiltin`<sup>Required</sup> <a name="isBuiltin" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isBuiltin"></a>

```typescript
public readonly isBuiltin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isSecure"></a>

```typescript
public readonly isSecure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTableFunction`<sup>Required</sup> <a name="isTableFunction" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.isTableFunction"></a>

```typescript
public readonly isTableFunction: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxNumArguments`<sup>Required</sup> <a name="maxNumArguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.maxNumArguments"></a>

```typescript
public readonly maxNumArguments: number;
```

- *Type:* number

---

##### `minNumArguments`<sup>Required</sup> <a name="minNumArguments" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.minNumArguments"></a>

```typescript
public readonly minNumArguments: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.secrets"></a>

```typescript
public readonly secrets: string;
```

- *Type:* string

---

##### `validForClustering`<sup>Required</sup> <a name="validForClustering" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.validForClustering"></a>

```typescript
public readonly validForClustering: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProcedurePythonShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonShowOutput">ProcedurePythonShowOutput</a>

---


### ProcedurePythonTimeoutsOutputReference <a name="ProcedurePythonTimeoutsOutputReference" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.Initializer"></a>

```typescript
import { procedurePython } from '@cdktf/provider-snowflake'

new procedurePython.ProcedurePythonTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProcedurePythonTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.procedurePython.ProcedurePythonTimeouts">ProcedurePythonTimeouts</a>

---



