import styled from 'styled-components';

export const Container = styled.div`   
    display: grid;
    grid-template-columns: repeat(4, 1fr);   
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 2rem;

    @media screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);   
      justify-content: center;
      gap: 1rem;
    }

    .ContentCard{
      width: 280px;
      height: 420px;
      background: var(--background);
      border: none;
      border-radius:0.5rem;

      cursor: pointer;

      img{
        width: 100%;
        height: 100%;
        border-radius:0.5rem;
      }

      h3{
        color: #ffffff;
        display: flex;
        justify-content: center;

      }
    };

    
`;
