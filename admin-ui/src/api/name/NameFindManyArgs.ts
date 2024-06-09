import { NameWhereInput } from "./NameWhereInput";
import { NameOrderByInput } from "./NameOrderByInput";

export type NameFindManyArgs = {
  where?: NameWhereInput;
  orderBy?: Array<NameOrderByInput>;
  skip?: number;
  take?: number;
};
