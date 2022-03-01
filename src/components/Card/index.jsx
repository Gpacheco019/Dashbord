import React, {useContext} from 'react';
import { Container } from './styles';

import {cavaleiros} from '../../context/cavaleiros'

export default function Card({srcImg, nameCavaleiro}){  

  const {handleSelectCavaleiros, selectCavaleiros } = useContext(cavaleiros) 

  return(
    <Container >
      <img onClick={handleSelectCavaleiros} src={srcImg} alt={nameCavaleiro}/>
      <h3 >{nameCavaleiro}</h3>
    </Container>
  );
}