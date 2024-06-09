import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NameTitle } from "./NameTitle";

export const NameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="name.id" reference="Name" label="Name">
          <SelectInput optionText={NameTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="names"
          reference="Name"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NameTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
