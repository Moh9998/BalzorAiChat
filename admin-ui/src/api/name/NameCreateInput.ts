import { NameWhereUniqueInput } from "./NameWhereUniqueInput";
import { NameCreateNestedManyWithoutNamesInput } from "./NameCreateNestedManyWithoutNamesInput";

export type NameCreateInput = {
  name?: NameWhereUniqueInput | null;
  names?: NameCreateNestedManyWithoutNamesInput;
};
