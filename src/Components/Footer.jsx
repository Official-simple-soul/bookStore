import FooterImage from '../images/footer-image.jpg';
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-16 px-2 md:px-0'>
        <div className="container text-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="left flex-cols space-y-3 text-center md:text-left">
                    <h1 className='text-2xl md:text-3xl font-bold'>Reading made easy</h1>
                    <p className='md:text-2xl'>Do you love to read?</p>
                    <p className='md:text-2xl'>Are you finding it difficult to read?</p>
                    <p className='md:text-2xl'>Do you get tired when reading?</p>
                </div>
                <div className="right">
                    <p className='md:text-2xl text-center md:text-left'>Worry no more! We are here to fix this issue for you and make reading so easy</p>
                    <div className="contact-mentor text-center my-4">
                        <p className='font-bold mb-2'>Click the button below to get a mentor</p>
                        <button className='bg-secColor3 px-6 py-2 rounded-lg'>Get a Mentor</button>
                    </div>
                </div>
            </div>
            <hr className='border-2 my-3'></hr>
            <div className="last text-center mt-6 grid md:grid-cols-2">
                <h1 className='text-2xl md:text-3xl font-bold'>SUBSCRIPTE TO OUR BOOK UPDATE</h1>
                <form action="" className='mt-3 flex justify-center items-center flex-col'>
                    <input type="email" 
                            className='px-3 w-80 md:w-96 py-2 bg-transparent border md:border-4 border-white rounded'
                            placeholder='example@mail.com'
                    />
                    <input type="submit" 
                    className='border px-3 mt-3 text-2xl'
                    />
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer