import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const cavaleiros = createContext()

function CavaleirosProvaider({children}){

  const [selectCavaleiros, setSelectCavaleiros] = useState({})
  const [allCavaleiros, setAllCavaleiros] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function handleSelectCavaleiros(event){
    event.preventDefault()
    const nameKnight =  event.currentTarget.alt
    const selectCavaleiros =  allCavaleiros.find(cavaleiro => cavaleiro.Nome === nameKnight)
    setIsOpen(true)
    setSelectCavaleiros( selectCavaleiros)

  }

  function closeModal() {
    setIsOpen(false);
  }


  useEffect(() => {    
    api
      .get('/Cavaleiros')
      .then((response) => setAllCavaleiros(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  },[]);


  return(
    <cavaleiros.Provider value={{handleSelectCavaleiros, selectCavaleiros, allCavaleiros, modalIsOpen, closeModal}}>
      {children}
    </cavaleiros.Provider>
  )
}

export { CavaleirosProvaider, cavaleiros}