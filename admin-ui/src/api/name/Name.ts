export type Name = {
  createdAt: Date;
  id: string;
  name?: Name | null;
  names?: Array<Name>;
  updatedAt: Date;
};
