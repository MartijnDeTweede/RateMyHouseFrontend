import styled from 'styled-components';

const Spinner = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  border: 8px solid white;
  border-top: 8px solid #32a852;
  border-radius: 50%;
  animation: rotate 5s linear infinite;


@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}`;

export default Spinner;
