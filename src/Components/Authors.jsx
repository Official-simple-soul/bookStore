import React from 'react'
import Book from '../images/MainBG.jpg';
import { useState, useEffect } from 'react';
import { bookdata } from './Data';

const Authors = () => {
 
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
      <h1 className='text-center text-3xl font-bold mb-8 text-secColor'>Read about books authors and their discoveries</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3 md:px-0">
            {
              dat.map(item=> {
                const {img, title, author, price, image2} = item;
                return <div className="card mb-8 text-secColor border shadow">
                          <div className="card-image">
                            <img src={image2} alt="" />
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

export default Authors