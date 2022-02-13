import React, { createContext, useState } from 'react';

const cavaleiros = createContext()

function CavaleirosProvaider({children}){

  const [selectCavaleiros, setSelectCavaleiros] = useState({})

  function handleSelectCavaleiros(event){
    event.preventDefault()

    const nomeCavaleiro =  event.currentTarget.alt
    console.log(nomeCavaleiro)
    setSelectCavaleiros({...selectCavaleiros, nome:nomeCavaleiro})

  }


  return(
    <cavaleiros.Provider value={{handleSelectCavaleiros, selectCavaleiros}}>
      {children}
    </cavaleiros.Provider>
  )
}

export { CavaleirosProvaider, cavaleiros}