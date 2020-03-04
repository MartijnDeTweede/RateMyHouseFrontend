import React from 'react';
import FlexBoxRowHolder from './stylers/FlexBoxRowHolder';
import FlexBoxColumnHolder from './stylers/FlexBoxColumnHolder';
import ErrorInfo from './stylers/ErrorInfo';

const Message: React.FC<{
  message: string;
}> = ({
  message,
}) => {
  return(
  <FlexBoxRowHolder>
    <ErrorInfo>
      <FlexBoxColumnHolder>
      <article>{message}</article>
      </FlexBoxColumnHolder>
    </ErrorInfo>      
  </FlexBoxRowHolder>
  )
}

export default Message;
