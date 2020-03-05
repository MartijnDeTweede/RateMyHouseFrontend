import React, { ReactChild } from 'react';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import Label from '../displayComponents/Label';
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
    <FlexBoxColumnHolder>
    <Label htmlFor={fieldName}>{labelText}</Label>
    <Select name={fieldName} id={fieldName} onBlur={(event) => onBlur(event)}>{children}</Select>
  </FlexBoxColumnHolder>
  );
}

export default SelectField;

