import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
min-width: 130px;
display: inline-block;
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
    <div>
    <StyledLabel htmlFor={fieldName}>{labelText}</StyledLabel>
    <input defaultValue={defaultValue} type={type} name={fieldName} id={fieldName} onBlur={(event) => onBlur(event)}></input>
  </div>
  )
}

export default InputField;