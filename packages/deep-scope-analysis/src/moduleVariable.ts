
export class ModuleVariable {

  constructor(
   public variableName: string,
   public isImported: boolean = false,
   public isExported: boolean = false,
   public exportedName: string | null = null,
   public importSourceName: string | null = null,
  ) { }

}
