import React from 'react';
import Spinner from './displayComponents/Spinner';
import styled from 'styled-components';
import FlexBoxRow from './stylers/FlexBoxRowHolder';

const LoaderHolder = styled.section`
  width: 200px;
  height: 200px;
`;

 const Loader: React.FC = () => (
   <FlexBoxRow>
    <LoaderHolder>
        <Spinner>
          <Spinner>
            <Spinner>
              <Spinner />
            </Spinner>
          </Spinner>
        </Spinner>
    </LoaderHolder>  
   </FlexBoxRow>
);

export default Loader;