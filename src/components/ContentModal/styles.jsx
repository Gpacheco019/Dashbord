import styled from 'styled-components';

export const Container = styled.div`

  @media screen and (max-width: 486px) {
    background-image: linear-gradient(0deg, #f2f2f2  75%, #0d0433 25%);
    width: 100vw;
    height: 60vh;    
    position: relative;
    padding:20px ;

    h1{
      margin-top: 0.4rem;
      font-size: 1rem;
      text-align: center;
    }
    h2{
      margin-top: 0.4rem;
      font-size: 1rem;
      text-align: center;
    }
  }
  
  
`

export const ContainerImg = styled.div`  
  @media screen and (max-width: 486px) {
    
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: solid 0.5rem #fff;
    background-image: url(${props => props.img});
    background-size: cover;
   
    margin: auto;   

  }
  
  
`