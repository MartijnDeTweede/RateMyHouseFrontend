import styled from 'styled-components';

const FlexWrapper = styled.section`
display: flex;
flex-wrap: ${(props: any) => props.wrap || "wrap"}
align-content: center;
justify-content: center;
flex-direction: row;
`


export default FlexWrapper;