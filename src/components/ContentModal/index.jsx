import React, {useContext} from 'react';
import {cavaleiros} from '../../context/cavaleiros';
import {Container, ContainerImg} from './styles'

const ContentModal =  () => {
  const { selectCavaleiros } = useContext(cavaleiros)
  console.log('oq vem',selectCavaleiros)

  return (
    <Container>
      {selectCavaleiros.map(cavaleiro => (
        <>
        <ContainerImg img={cavaleiro.src} />        
        <h1>Cavaleiro de {cavaleiro.sign}</h1>
        <h2>Nome: {cavaleiro.name}</h2>

        </>
      ))}
    </Container>
  )
};

export default ContentModal;