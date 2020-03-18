
import React from 'react';

import styled from 'styled-components';

const Label = styled.label`
min-width: 80px;
display: inline-block;
color: #292929;
margin-top: 5px;
font-weight: bold;
font-size: 10px;
`;

const Value = styled.article`
font-size: 10px;
`;

const DisplayField: React.FC<{
  label: string;
  fieldValue: string;
}> = ({label, fieldValue}) => {
  return (
    <div>
      <Label>{label}</Label> <Value>{fieldValue}</Value>
    </div>
  )
};

export default DisplayField;