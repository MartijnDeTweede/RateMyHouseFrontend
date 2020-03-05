import React from 'react';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import Label from '../displayComponents/Label';
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
    <FlexBoxColumnHolder>
    <Label htmlFor={fieldName}>{labelText}</Label>
    <Input
      defaultValue={defaultValue}
      type={type} name={fieldName}
      id={fieldName}
      onBlur={(event) => onBlur(event)}>
    </Input>
  </FlexBoxColumnHolder>
  )
}

export default InputField;