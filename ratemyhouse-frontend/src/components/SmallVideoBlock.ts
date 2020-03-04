import styled from 'styled-components';

const SmallVideoBlock = styled.section`
margin: 10px 10px;
padding: 5px};
border:2px solid #32a852;
align-self: center;
border-radius: 5px;
background-color: white;
color: #32a852;

transition: 3s ease-in;
animation: ${(props: any) => props.animation};

@keyframes Scale-fade-in {
  from {
    transform: Scale(1)
  }
  to {
    transform: Scale(1.1)
  }
}`;

export default SmallVideoBlock;