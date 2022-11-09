import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Book from '../images/MainBG.jpg'
const Read = () => {
    const {id} = useParams()
    const [readInfo, setReadInfo] = useState([])

    const readInfoFunc = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAFhC8CVcFg4EIkc8iUWHp2XOTniAsPLMM`)
        .then(res=>setReadInfo(res.data))
        .catch(err=>console.log(err))
    }
    

    useEffect(()=> {
        readInfoFunc()
    },[id])

    console.log(id)
    const linkTo = () => {
        window.location.href = '/'
    }

  return (
    <>
        <div className="container read py-3 px-2">
            <button className="px-3 bg-secColor rounded text-white" onClick={linkTo}><i className="fa-solid fa-arrow-left mr-2"></i><span className="">Back</span></button>
            <div className="card py-6">
                <div className="card-top md:flex justify-start items-center">
                    <div className="card-image">
                        <img src={Book} alt="" className='md:w-96 mr-8'/>
                    </div>
                    <div className="card-body font-bold text-center md:text-left my-6">
                        <ul>
                            <li className='text-2xl my-2 md:my-6 md:text-3xl'>Learning React</li>
                            <li className='text-2xl my-2 md:my-6 md:text-3xl'>Kirupa Chinnathambi</li>
                            <li className='text-2xl my-2 md:my-6 md:text-3xl'>Addison-wesley Proffesional</li>
                        </ul>
                        <button className='border px-4 py-1 bg-secColor text-white rounded-lg text-2xl hidden md:block md:text-2xl'>Read More</button>
                    </div>
                </div>
                <div className="card-story text-justify md:my-6">
                    <p>Card description Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sit quaerat 
                        similique quisquam sint minima! Laborum excepturi 
                        fugiat, quaerat, veniam rem doloremque sunt iusto 
                        eos voluptates nobis officiis assumenda! Rerum, 
                        cumque! Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sit quaerat 
                        similique quisquam sint minima! Laborum excepturi 
                        fugiat, quaerat, veniam rem doloremque sunt iusto 
                        eos voluptates nobis officiis assumenda! Rerum, 
                        cumque! Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sit quaerat 
                        similique quisquam sint minima! Laborum excepturi 
                        fugiat, quaerat, veniam rem doloremque sunt iusto 
                        eos voluptates nobis officiis assumenda! Rerum, 
                        cumque!</p>
                    <p>Card description Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sit quaerat 
                        similique quisquam sint minima! Laborum excepturi 
                        fugiat, quaerat, veniam rem doloremque sunt iusto 
                        eos voluptates nobis officiis assumenda! Rerum, 
                        cumque! Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sit quaerat 
                        similique quisquam sint minima! Laborum excepturi 
                        fugiat, quaerat, veniam rem doloremque sunt iusto 
                        eos voluptates nobis officiis assumenda! Rerum, 
                        cumque! Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sit quaerat 
                        similique quisquam sint minima! Laborum excepturi 
                        fugiat, quaerat, veniam rem doloremque sunt iusto 
                        eos voluptates nobis officiis assumenda! Rerum, 
                        cumque!</p>
                        
                </div>
                <div className="button text-center my-8">
                    <button className='border px-3 bg-secColor text-white rounded-lg text-2xl md:hidden md:text-2xl'>Read More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Read