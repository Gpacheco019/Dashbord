
import { Container } from './styles';

import Button from '../Button'


export default function ButtonList(){

  const classArmor = ['Bonze', 'prata', 'Ouro', 'Sapuris'];
  return(
    <Container>
      {classArmor.map(name => {
        return(
          <Button key={name} classArmor={name} />
        )
      })}                       
    </Container>
  );
}