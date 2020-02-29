import styled from 'styled-components';

const StyledHeader = styled.header`
width: 100%;
height: 50px;
background-color: white;
color: #32a852;
font-weight: bold;
border: 2px solid #32a852;
font-size: calc(10px + 2vmin);
transition: 3s ease-in;
animation: Header-fade-in 1 0.5s linear;

@keyframes Header-fade-in {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}

`;

export default StyledHeader;