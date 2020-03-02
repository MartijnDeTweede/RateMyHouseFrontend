import React, { ReactChild } from 'react';
import styled from 'styled-components';
import FlexBoxColumn from './FlexBoxColumn';
import StyledLabel from './StyledLabel';

const StyledSelect = styled.select`
margin-top: 5px;
padding: 5px;
background-color: #f5f7f6;
border:2px solid #32a852;
border-radius: 5px;
color: #32a852;
`

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
    <StyledLabel htmlFor={fieldName}>{labelText}</StyledLabel>
  <StyledSelect name={fieldName} id={fieldName} onBlur={(event) => onBlur(event)}>{children}</StyledSelect>
  </FlexBoxColumn>
  );
}

export default SelectField;

