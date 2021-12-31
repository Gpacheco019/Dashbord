
import { Container } from './styles';

import Button from '../Button'


export default function ButtonList(){

  const classArmor = ['Bronze', 'prata', 'Ouro', 'Sapuris'];
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