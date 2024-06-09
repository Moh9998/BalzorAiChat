import { NameWhereUniqueInput } from "./NameWhereUniqueInput";
import { NameUpdateInput } from "./NameUpdateInput";

export type UpdateNameArgs = {
  where: NameWhereUniqueInput;
  data: NameUpdateInput;
};
