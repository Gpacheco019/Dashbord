import { useContext } from 'react';
import ButtonList from '../ButtonList';
import CardList from '../CardList';
import {Container} from './styles'
import ModalComponent from '../Modal'
import {cavaleiros} from '../../context/cavaleiros'

export default function Dashboard() {
  const {allCavaleiros, modalIsOpen, closeModal, selectCavaleiros} = useContext(cavaleiros)  
    console.log('qual Knight', selectCavaleiros)
    return (
        <Container>
            <ButtonList />
            <CardList />
            <ModalComponent
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}   
            >
                {selectCavaleiros ? (
                   <h1>{selectCavaleiros.Nome}</h1>
                ):(
                    null
                )}
            </ModalComponent>
        </Container>
    );
}