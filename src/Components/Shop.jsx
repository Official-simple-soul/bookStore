import React from 'react'
import Book from '../images/MainBG.jpg';
import { useState, useEffect } from 'react';
import { bookdata } from './Data';

const Shop = () => {
 
  const [dat, setDat] = useState([])
  const [loading, setLoading] = useState(false)
  const datFunct = () => {
    setLoading(true)
    setDat(bookdata)
    setLoading(false)
  }
  useEffect(()=> {
    datFunct()
  }, [])

  if(loading) {
    return <h1>Loading</h1>
  }
  return (
    <div className='container py-10'>
      <h1 className='text-center text-3xl font-bold mb-8 text-secColor'>Get your favourite book from the store</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3 md:px-0">
            {
              dat.map((item, idx)=> {
                const {img, title, author, price} = item;
                return <div className="card mb-8 text-secColor border shadow" key={idx+1}>
                          <div className="card-image">
                            <img src={img} alt="" />
                          </div>
                          <div className="card-body mt-4 px-3 pb-3">
                            <ul>
                              <li><span className='font-bold'>Title: </span>{title}</li>
                              <li><span className='font-bold'>Author: </span>{author}</li>
                              <li><span className='font-bold'>Price: </span>{price}</li>
                            </ul>
                          </div>
                    </div>

              })
            }
        </div>
    </div>
  )
}

export default Shop