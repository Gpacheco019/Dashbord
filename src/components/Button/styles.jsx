import styled from 'styled-components';

export const Container = styled.div`
  width: 8rem;
  height: 3rem;  

  background: var(--button);
  border: none;
  border-radius: 0.4rem;
  transition: filter 0.2s;
  cursor: pointer;

  display: flex;
  justify-content:center;
  align-items: center;

  p{
    color: #ffffff;
    font-weight: 500; 
  }

  &:hover{
    filter: brightness(0.9);
  }
`