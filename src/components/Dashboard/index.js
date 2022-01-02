import ButtonList from '../ButtonList';
import CardList from '../CardList';
import {Container} from './styles'



export default function Dashboard(){
    return (
        <Container>
            <ButtonList />
            <CardList />
        </Container>
    );
}