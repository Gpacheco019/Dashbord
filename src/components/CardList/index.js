import {useState, useEffect} from 'react';
import Aiolia from '../../assets/gold/aiolia_leao.jpg';
import { api } from '../../services/api';

import { Container } from './styles';
import Card from '../Card';

export default function CardList(){

  const [viewCarvaleiro, setViewCavaleiro] = useState([]);

   useEffect(() => {    
    api
      .get('/Cavaleiros')
      .then((response) => setViewCavaleiro(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  },[]);
  
  const returnCavaleiros = [...viewCarvaleiro]; 

  return(
    <Container>
      {returnCavaleiros.map(e => {
        return(
          
          <Card 
            key={e.id}
            srcImg={e.src}
            nameCavaleiro={e?.Nome}
          />      
        )
      })}
    </Container>
  );
}
