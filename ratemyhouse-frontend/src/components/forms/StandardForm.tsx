import React, { useState, ReactNode } from 'react';
import FlexBoxRowHolder from '../stylers/FlexBoxRowHolder';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import InformationBlock from '../blocks/InformationBlock';


const StandardForm: React.FC<{
  fields?: ReactNode [],
  message?: ReactNode,
  submitButton: ReactNode, 
}> = ({fields, submitButton, message}) => {
  return(
    <FlexBoxRowHolder>
      <InformationBlock>
        <FlexBoxColumnHolder>
            {fields && fields.map(field => (field))}
            {message}
        </FlexBoxColumnHolder>
        {submitButton}
      </InformationBlock>      
    </FlexBoxRowHolder>
  )
}

export default StandardForm;