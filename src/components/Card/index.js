import React, {useContext} from 'react';
import { Container } from './styles';

import {cavaleiros} from '../../context/cavaleiros'

export default function Card({srcImg, nameCavaleiro, cavaleiro}){  

  const {handleSelectCavaleiros, selectCavaleiros } = useContext(cavaleiros)
  console.log('eee', selectCavaleiros)
  return(
    <Container >
      <img onClick={handleSelectCavaleiros} src={srcImg} alt={nameCavaleiro}/>
      <h3 >{nameCavaleiro}</h3>
    </Container>
  );
}