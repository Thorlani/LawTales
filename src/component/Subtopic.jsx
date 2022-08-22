import React from 'react'

const Subtopic = ({ title, subtitle }) => {
  return (
    <>
      <div className='px-[8%] mt-[140px] flex flex-col justify-center items-center'>
        <h2 className='font-semibold text-4xl tracking-wider text-center'>{title}</h2>
        <p className='tracking-widest text-xl max-w-3xl text-center'>{subtitle}</p>
      </div>
    </>
  )
}

export default Subtopic