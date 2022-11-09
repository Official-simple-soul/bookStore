import React, { useState } from 'react'
import { useGlobalContext } from './Context'
import { useEffect } from 'react'
import axios from 'axios'

const Form = () => {
  const {search, setSearch} = useGlobalContext();
  const {bookData, setBookData} = useGlobalContext([]);

  const searchBook = (event) => {
    if(event.key ==='Enter') {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAFhC8CVcFg4EIkc8iUWHp2XOTniAsPLMM')
      .then(res=>setBookData(res))
      .catch(err=>console.log(err))
    }
  }


   const clickSearch = (e) => {
      e.preventDefault()
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAFhC8CVcFg4EIkc8iUWHp2XOTniAsPLMM')
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err))
    }
  
    
  return (
    <div>
        <form action="" className='border border-secColor3 rounded-xl flex justify-between'>
            <input 
                type="text"
                className='px-2 py-1 md:py-3 bg-transparent border-0 search-input'
                placeholder='search books'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onKeyPress={searchBook}

            />
            <input 
                type="submit" 
                name="Search"
                value='Search'
                onClick={clickSearch}
                className='shadow px-2 md:px-6 md:py-3 text-black rounded-xl'
                id="" />
        </form>
    </div>
  )
}

export default Form