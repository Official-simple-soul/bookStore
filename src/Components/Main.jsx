import React, { useContext, useState } from 'react'
import MainImage from '../images/MainImage.jpg'
import Aside from './Aside';
import Cards from './Cards';
import Form from './Form';
import axios from 'axios'
import { useGlobalContext } from './Context';

const Main = () => {
  const {bookData} = useGlobalContext();

  return (
    <>
    <main className='md:flex justify-start container md:relative'>
        <div className='container flex-col-reverse md:flex md:flex-row justify-start items-center w-48'>
            <div className="text text-secColor mt-3 md:mt-0 mx-auto md:ml-3 rounded-xl w-80">
                <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold md:leading-12'>Get Your New Book With The Best Price</h1>
                <Form />
            </div>
            <div className="image md:flex relative md:justify-end z-20 absolute md:top-0">
                <img src={MainImage} alt="MainImage" className='md:w-96'/>
            </div>
        </div>
        <Aside />
    </main>
    <div className="cardSecion mt-10">
        <Cards book={bookData}/>
    </div>
    </>
    
  )
}

export default Main