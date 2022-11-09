import React, { useContext, useState } from "react";

const BookContext = React.createContext()

let BookProvider = ({children}) => {
    const [search, setSearch] = useState('')
    const [bookData, setBookData] = useState('')
    const [open, setOpen] = useState(false)

    return ( 
            <BookContext.Provider value={ {search , setSearch, bookData, setBookData, open, setOpen } } >
                {children}
            </BookContext.Provider> 
    )
}


const useGlobalContext = () => {
    return useContext(BookContext)
}

export {useGlobalContext, BookProvider}