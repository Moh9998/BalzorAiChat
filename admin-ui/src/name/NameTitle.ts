import { Name as TName } from "../api/name/Name";

export const NAME_TITLE_FIELD = "name";

export const NameTitle = (record: TName): string => {
  return record.name?.toString() || String(record.id);
};
