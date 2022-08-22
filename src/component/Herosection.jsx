import React from 'react'
import "./herosection.css"

const Herosection = ({
  title,
  subtitle,
  btn,
  img1,
  img2,
  img3,
}) => {
  return (
    <>
      <div className='px-[8%] w-full h-[80vh] md:h-[65vh] lg:h-[50vh] xl:h-[80vh]  flex flex-col-reverse md:flex-row'>
          <div id='bg' className='mt-[7%] md:mt-[9%] lg:mt-[7%] w-full md:w-[40%] relative z-50 h-fit xl:h-[75%] p-4 md:p-8 text-center md:text-left 2xl:w-[50%] 2xl:h-[65%] 2xl:p-[4%]'>
              <img src="./asset/dot.svg" alt="dots" className='mb-[5%] w-[10%] xl:w-fit' />
              <h1 className='font-bold text-[28px] lg:text-[44px] 2xl:text-6xl tracking-wide'>{title}</h1>
              <p className='text-base lg:text-[20px] mb-4 font-light tracking-wide 2xl:text-2xl 2xl:leading-relaxed'>{subtitle}</p>
              <button className='px-[8%] py-[4%] bg-black text-white rounded-[10px] font-bold tracking-widest text-xl'>{btn}</button>
          </div>
          <div className='w-full md:w-[60%] h-[50%] md:h-[100%] relative'>
              <img src={img1} alt="book" className='absolute top-[40px] lg:top-0 right-[12px] lg:right-[.2rem] z-20 w-[50%] h-[50%] md:w-[60%] md:h-[54%]' />
              <img src={img2} alt="balance" className='absolute top-20 md:top-20 left-0 lg:-left-[6rem] xl:-left-[12rem] z-10 w-[70%] h-[70%] md:w-[70%] md:h-[70%]' />
              <img src={img3} alt="liberty" className='absolute -bottom-[30px] md:bottom-0 right-[10px] md:right-0 z-30 w-[50%] h-[50%] md:w-[60%] md:h-[54%]' />
          </div>
      </div>
    </>
  )
}

export default Herosection