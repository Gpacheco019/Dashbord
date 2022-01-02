import React from 'react';
import Aiolia from '../../assets/gold/aiolia_leao.jpg';
import { Container } from './styles';

export default function CardList(){
  return(
    <Container>        
          <img src={Aiolia} alt="" /> 
          <img src={Aiolia} alt="" />  
          <img src={Aiolia} alt="" />      
          <img src={Aiolia} alt="" />        
           
    </Container>
  );
}
