import React from 'react';
import FlexBoxColumn from './FlexBoxColumn';
import Label from './Label';
import Input from './Input';

const InputField: React.FC<{
  fieldName: string;
  labelText: string;
  onBlur: Function,
  type: string,
  defaultValue?: string | number,
}> = ({
  fieldName,
  labelText,
  onBlur,
  type,
  defaultValue
}) => {
  return(
    <FlexBoxColumn>
    <Label htmlFor={fieldName}>{labelText}</Label>
    <Input
      defaultValue={defaultValue}
      type={type} name={fieldName}
      id={fieldName}
      onBlur={(event) => onBlur(event)}>
    </Input>
  </FlexBoxColumn>
  )
}

export default InputField;