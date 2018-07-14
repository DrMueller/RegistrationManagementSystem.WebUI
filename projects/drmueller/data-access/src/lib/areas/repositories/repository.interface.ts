export interface IRepository<TModel> {
  loadByIdAsync(id: string): Promise<TModel>;
  loadAllAsync(): Promise<Array<TModel>>;
  deleteAsync(id: string): Promise<void>;
  saveAsync(model: TModel): Promise<TModel>;
}
