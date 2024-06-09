import { StringFilter } from "../../util/StringFilter";
import { NameWhereUniqueInput } from "./NameWhereUniqueInput";
import { NameListRelationFilter } from "./NameListRelationFilter";

export type NameWhereInput = {
  id?: StringFilter;
  name?: NameWhereUniqueInput;
  names?: NameListRelationFilter;
};
