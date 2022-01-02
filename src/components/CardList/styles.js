import styled from 'styled-components';

export const Container = styled.div`
  width: 100%
  height: 450px
  
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;      

    img{
      width: 20rem;
      height: 35rem;
      margin: 10px;
      padding: 20px
    
  }
`;
