import React from 'react'

const Aside = () => {
  return (
    <aside className='h-96 md:bg-secColor3 md:w-80 flex justify-start items-center absolute md:relative md:top-0 left-0 top-80 z-50 md:z-0'>
        <div className="semi-circle bg-secColor hidden md:block md:bg-secColor2 w-32 h-32 md:h-64 md:w-64 absolute left-16 md:-left-32"></div>
    </aside>
  )
}

export default Aside