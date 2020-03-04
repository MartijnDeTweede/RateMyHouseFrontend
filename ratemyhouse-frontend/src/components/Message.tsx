import React from 'react';
import FlexBoxRow from './FlexBoxRow';
import FlexBoxColumn from './FlexBoxColumn';
import ErrorInfoSection from './ErrorInfoSection';

const Message: React.FC<{
  message: string;
}> = ({
  message,
}) => {
  return(
    <FlexBoxRow>
    <ErrorInfoSection>
      <FlexBoxColumn>
      <article>{message}</article>
      </FlexBoxColumn>
    </ErrorInfoSection>      
  </FlexBoxRow>
  )
}

export default Message;
