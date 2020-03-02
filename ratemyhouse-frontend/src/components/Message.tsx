import React from 'react';
import FlexWrapper from './FlexWrapper';
import FlexBoxColumn from './FlexBoxColumn';
import ErrorInfoSection from './ErrorInfoSection';

const Message: React.FC<{
  message: string;
}> = ({
  message,
}) => {
  return(
    <FlexWrapper>
    <ErrorInfoSection>
      <FlexBoxColumn>
      <div>{message}</div>
      </FlexBoxColumn>
    </ErrorInfoSection>      
  </FlexWrapper>
  )
}

export default Message;
