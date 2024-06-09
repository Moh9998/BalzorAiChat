import { NameWhereUniqueInput } from "./NameWhereUniqueInput";
import { NameUpdateManyWithoutNamesInput } from "./NameUpdateManyWithoutNamesInput";

export type NameUpdateInput = {
  name?: NameWhereUniqueInput | null;
  names?: NameUpdateManyWithoutNamesInput;
};
