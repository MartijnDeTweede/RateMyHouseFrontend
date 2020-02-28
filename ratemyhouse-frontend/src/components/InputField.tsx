import React from 'react';
import styled from 'styled-components';
import FlexBoxColumn from './FlexBoxColumn';

const StyledLabel = styled.label`
min-width: 130px;
display: inline-block;
color: #32a852;
`
const StyledInput = styled.input`
  margin-top: 5px;
  padding: 5px;
  background-color: #f5f7f6;
  border:1px solid #32a852;
  color: #32a852;
`

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
    <StyledLabel htmlFor={fieldName}>{labelText}</StyledLabel>
    <StyledInput defaultValue={defaultValue} type={type} name={fieldName} id={fieldName} onBlur={(event) => onBlur(event)}></StyledInput>
  </FlexBoxColumn>
  )
}

export default InputField;