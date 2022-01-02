import React from 'react';
import Aiolia from '../../assets/gold/aiolia_leao.jpg';
import Dohko from '../../assets/gold/dohko_libra.jpg';

import { Container } from './styles';

export default function CardList(){
  return(
    <Container>
        <div className="ContentCard">
          <img src={Aiolia} alt="" />
          <h3>oi</h3>
        </div> 
        <div className="ContentCard">
          <img src={Dohko} alt="" />
          <h3>oi</h3>
        </div>
        <div className="ContentCard">
          <h3>oi</h3>
        </div>
        <div className="ContentCard">
          <h3>oi</h3>
        </div>
        <div className="ContentCard">
          <h3>oi</h3>
        </div>       
        {/* <img src={Aiolia} alt="" /> 
        <img src={Aiolia} alt="" />  
        <img src={Aiolia} alt="" />      
        <img src={Aiolia} alt="" />           */}
    </Container>
  );
}
