import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Book from '../images/MainBG.jpg'
import { Link } from 'react-router-dom';


const Cards = ({book}) => {
const [defaults, setDefaults] = useState([])

    const defaultValue = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&orderBy=newest&key=AIzaSyAFhC8CVcFg4EIkc8iUWHp2XOTniAsPLMM')
        .then(res=>setDefaults(res.data.items))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        defaultValue()
    }, [])

    if(book.length>0){
        return (
            <div className='container grid grid-cols-1 md:grid-cols-4 gap-4 px-12 md:px-0'>
                {book.map((item, idx)=> {
                    const {id} = item
                    return <div className="card mb-8 bg-secColor2 relative pb-8" key={idx+1}>
                            <div className="card-top">
                                <img src={item.volumeInfo.imageLinks?item.volumeInfo.imageLinks.smallThumbnail:Book} alt="" className='w-96 h-80'/>
                                <p className='absolute text-secColor2 text-1xl z-10 top-2 left-2'>{idx+1}</p>
                            </div>
                            <div className="card-body p-3 text-white">
                                <ul>
                                    <li><span className='font-bold'>Title:</span> {item.volumeInfo.title}</li>
                                    <li><span className='font-bold'>Author:</span> {
                                    item.volumeInfo.authors?item.volumeInfo.authors:'No Author'
                                    }</li>
                                    <li><span className='font-bold'>Page Count:</span> {item.volumeInfo.pageCount}</li>
                                    <li><span className='font-bold'>Price:</span> {item.saleInfo.saleability}</li>
                                </ul>
                                <div className="buy text-center absolute bottom-2 left-0 right-0">
                                    <Link to={`/read/${id}`}><span className='border-2 px-5 rounded-lg z-20'>Read</span></Link>
                                </div>
                            </div>
                    </div>
                })}
            </div>
          )
    }

  return (
    <div className='container grid grid-cols-1 md:grid-cols-4 gap-4 px-12 md:px-0'>
        {defaults.map((item, idx)=> {
            const {id} = item
            return <div className="card mb-8 bg-secColor2 relative pb-8 rounded-lg shadow-xl" key={idx+1}>
                    <div className="card-top">
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" className='w-96 h-80 rounded-lg'/>
                        <p className='absolute text-secColor2 text-1xl z-10 top-2 left-2'>{idx+1}</p>
                    </div>
                    <div className="card-body p-3 text-white">
                        <ul>
                            <li>Title: {item.volumeInfo.title}</li>
                            <li>Author: {
                            item.volumeInfo.authors?item.volumeInfo.authors:'No Author'
                            }</li>
                            <li><span className='font-bold'>Page Count:</span> {item.volumeInfo.pageCount}</li>
                            <li className='flex justify-between items-center relative font-bold'><span>Price: {item.saleInfo.saleability}</span></li>
                        </ul>
                        <div className="buy text-center absolute bottom-2 left-0 right-0">
                        <Link to={`read${id}`}><span className='border-2 px-5 rounded-lg z-20'>Read</span></Link>
                        </div>
                    </div>
            </div>
        })}
    </div>
  )
}

export default Cards