import styled from 'styled-components';

const ConfirmButton = styled.button`
padding: 10px 15px;
margin: 20px 10px 10px 10px;
font-weight: bold;
border-radius: 5px;
border: 2px solid #32a852;

color: #32a852;

&:hover:enabled {
  color: white;
  background-color: #32a852;
}

&:disabled  {
  color: #476b6b;
  border: 2px solid #476b6b;
}
`

export default ConfirmButton;