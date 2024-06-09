import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NameTitle } from "./NameTitle";

export const NameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
