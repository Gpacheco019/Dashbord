import { useContext } from 'react';
import ButtonList from '../ButtonList';
import CardList from '../CardList';
import ModalComponent from '../Modal';
import ContentModal from '../ContentModal';
import {Container} from './styles';
import {cavaleiros} from '../../context/cavaleiros'

export default function Dashboard() {
  const { modalIsOpen, closeModal, selectCavaleiros} = useContext(cavaleiros)  
    
    return (
        <Container>
            <ButtonList />
            <CardList />
            <ModalComponent
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}  
            >
                {selectCavaleiros ? (                   
                    <ContentModal />            
                ):(
                    null
                )}
            </ModalComponent>
        </Container>
    );
}