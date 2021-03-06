
import React from 'react';

import styled from 'styled-components';

const Label = styled.label`
min-width: 130px;
display: inline-block;
color: #292929;
font-weight: bold;
margin-top: 5px;`

const DisplayField: React.FC<{
  label: string;
  fieldValue: string;
}> = ({label, fieldValue}) => {
  return (
    <div>
      <Label>{label}</Label> <span>{fieldValue}</span>
    </div>
  )
};

export default DisplayField;