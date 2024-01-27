import React, { createContext, useContext, useState } from 'react';

export const BookContext = createContext()



export const useApi = ()=>{
    let func = useContext(BookContext)
    return func
}


export const BookContextProvider = (props)=>{
 



    let [books,setBooks] = useState([])


     

    return(
        <BookContext.Provider value={{books,setBooks}}>
             {props.children}

        </BookContext.Provider>
    )

}