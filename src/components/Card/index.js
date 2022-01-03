import { Container } from './styles';

export default function Card({srcImg, nameCavaleiro}){
  return(
    <Container>
      <img src={srcImg} alt={nameCavaleiro}/>
      <h3>{nameCavaleiro}</h3>
    </Container>
  );
}