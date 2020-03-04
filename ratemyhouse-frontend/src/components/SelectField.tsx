import React, { ReactChild } from 'react';
import FlexBoxColumn from './FlexBoxColumn';
import Label from './Label';
import Select from './Select';

const SelectField: React.FC<{
  fieldName: string;
  labelText: string;
  onBlur: Function,
  children: ReactChild [];
}> = ({
  fieldName,
  labelText,
  onBlur,
  children,
}) => {
  return(
    <FlexBoxColumn>
    <Label htmlFor={fieldName}>{labelText}</Label>
    <Select name={fieldName} id={fieldName} onBlur={(event) => onBlur(event)}>{children}</Select>
  </FlexBoxColumn>
  );
}

export default SelectField;

