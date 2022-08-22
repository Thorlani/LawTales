import React, {useState} from 'react'
import './herosection.css'
import paginate from "react-paginate"

const Card = ({ content, cardData, active }) => {

  const details = cardData.map((item) => {
    return (
      <div className='w-full bg-black rounded-[15px] text-white pb-5'>
        <img src={item.image} alt="card" className='w-full' />
        <div className='ml-[1.5rem]'>
          <h3 className='font-semibold text-xl'>{item.title}</h3>
          <p className='mb-[10px]'>{item.description}</p>
          <img src='./asset/cardButton.svg' alt="card button" />
        </div>
      </div>
    )
  })

  const details2 = cardData.map((item) => {
    return (
      <div id='bg' key={item.title} className='w-full rounded-[15px] text-black p-[26px]'>
        <h3 className='font-bold text-2xl tracking-widest mb-[35px]'>{item.title}</h3>
        <p className='mb-[20px] tracking-widest'>{item.description}</p>
        {active === "about" ? null : <img src='./asset/cardButtonB.svg' alt="card button" /> }
      </div>
    )
  })

  return (
    <>
      <div className='w-full h-fit grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 px-[8%] mt-[80px]'>
        {
          content === "withImage" ? (
            <>
              {details}
            </>
          ) : (
            <>
              {details2}
            </>
          )
        }
      </div>
    </>
  )
}

export default Card