import React from 'react';
import FlexBoxColumnHolder from './stylers/FlexBoxColumnHolder';
import ErrorInfoBlock from './blocks/ErrorInfoBlock';

const Message: React.FC<{
  message: string;
}> = ({
  message,
}) => {
  return(
    <ErrorInfoBlock>
      <article>{message}</article>
    </ErrorInfoBlock>      
  )
}

export default Message;
