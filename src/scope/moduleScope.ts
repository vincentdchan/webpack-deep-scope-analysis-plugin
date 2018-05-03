import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';
import { Definition } from '../definition';
import { Variable } from '../variable';
import { Reference } from '../reference';
import * as ESTree from 'estree';
import { ImportManager } from '../importManager';
import { ExportManager, LocalExportIdentifier } from '../exportManager';

export class ModuleScope extends Scope {
  public readonly importManager: ImportManager = new ImportManager();
  public readonly exportManager: ExportManager = new ExportManager();
  public isExportingNamedDeclaration: boolean = false;

  public constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, 'module', upperScope, block, false);
  }
  
  public __define(node: ESTree.Node, def: Definition): Variable | null {
    const ancestor = super.__define(node, def);
    if (ancestor !== null && this.isExportingNamedDeclaration) {
      this.exportManager.addLocalExportIdentifier(new LocalExportIdentifier(
        ancestor.name,
        ancestor.name,
        ancestor.defs[0].node
      ));
    }
    return ancestor;
  }

}
