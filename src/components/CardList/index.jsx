import {useState, useEffect, useContext} from 'react';
import { api } from '../../services/api';

import { Container } from './styles';
import Card from '../Card';

import {cavaleiros} from '../../context/cavaleiros'

export default function CardList(){
  
  const {allCavaleiros} = useContext(cavaleiros)  
  

  return(
    <Container>
      {allCavaleiros.map(e => {
        return(
          
          <Card            
            key={e.id}
            srcImg={e.src}
            nameCavaleiro={e?.name}
            cavaleiro={allCavaleiros}
          />      
        )
      })}
    </Container>
  );
}
