export interface Fortune {
  id?: string;
  notes?: string;
  lastModified?: Date;
}

export interface AirtableFortune {
  id: string;
  fields: { id: string; notes: string; lastModified: Date };
  created?: Date;
}
