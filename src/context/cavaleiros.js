import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const cavaleiros = createContext()

function CavaleirosProvaider({children}){

  const [selectCavaleiros, setSelectCavaleiros] = useState([])
  const [allCavaleiros, setAllCavaleiros] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function handleSelectCavaleiros(event){
    event.preventDefault()
    const nameKnight =  event.currentTarget.alt   
    const selectCavaleiro =  allCavaleiros.find(cavaleiro => cavaleiro.name === nameKnight)
    setIsOpen(true)
    setSelectCavaleiros((prevState) => [...prevState, {...selectCavaleiro}])
    // setSelectCavaleiros((prevState) => [...prevState, {...selectCavaleiro, ...selectCavaleiro.age = 2}])


  }

  function closeModal() {
    setIsOpen(false);
    setSelectCavaleiros([])
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