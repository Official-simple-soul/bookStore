import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Book from '../images/MainBG.jpg'
const Read = () => {
    const {id} = useParams()
    const [readInfo, setReadInfo] = useState([])

    const readInfoFunc = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyClBZcn6cgWyV2NZNwEqWfAGyHv6je1EUc`)
        .then(res=>setReadInfo(res.data))
        .catch(err=>console.log(err))
    }
    

    useEffect(()=> {
        readInfoFunc()
    },[id])

    const linkTo = () => {
        window.location.href = '/'
    }
    let description = readInfo.volumeInfo.description;
    let newDesc = description.slice(3)
    newDesc = newDesc.slice(0, -4)
  return (
    <>
        <div className="container read py-3 px-2">
            <button className="px-3 bg-secColor rounded text-white" onClick={linkTo}><i className="fa-solid fa-arrow-left mr-2"></i><span className="">Back</span></button>
            <div className="card py-6">
                <div className="card-top md:flex justify-start items-center">
                    <div className="card-image">
                        <img src={readInfo.volumeInfo.imageLinks.thumbnail?readInfo.volumeInfo.imageLinks.thumbnail:Book} alt="" className='w-full md:w-full md:mr-10'/>
                    </div>
                    <div className="card-body font-bold text-center md:text-left my-6 md:ml-8">
                        <ul>
                            <li className='text-2xl my-2 md:my-6 md:text-3xl'>{readInfo.volumeInfo.title}</li>
                            <li className='text-2xl my-2 md:my-6 md:text-3xl'>{readInfo.volumeInfo.authors}</li>
                            <li className='text-2xl my-2 md:my-6 md:text-3xl'>{readInfo.volumeInfo.subtitle}</li>
                        </ul>
                        <button className='border px-4 py-1 bg-secColor text-white rounded-lg text-2xl hidden md:block md:text-2xl'>Read More</button>
                    </div>
                </div>
                <div className="card-story text-justify md:my-6">
                    <p>{newDesc}</p>
                </div>
                <div className="button text-center my-8">
                    <Link to={readInfo.volumeInfo.previewLink}><button className='border px-3 bg-secColor text-white rounded-lg text-2xl md:hidden md:text-2xl cursor-pointer'>Read More</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Read