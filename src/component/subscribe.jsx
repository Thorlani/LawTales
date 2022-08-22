import React from 'react'

const Subscribe = () => {
  return (
    <>
        <div className='w-full h-fit px-[8%] py-[6%] bg-black grid md:grid-cols-2 gap-2 mt-[100px]'>
            <div className='w-full md:w-50% text-white'>
                <p className='w-[100%] text-base md:text-xl'>Want to get update from LawTales? Subscribe to our weekly Newsletter</p>
            </div>
            <form className='flex items-center w-full md:w-[100%]'>
                <input 
                type="text" 
                placeholder='Enter mail' 
                className='h-[50px] w-[70%] border-[1px] border-white bg-black rounded-l-[10px] outline-none indent-4 text-xl text-white'

                />
                <button className='h-[50px] w-[30%]  bg-white text-black rounded-[10px] relative -left-2'>Subscribe</button>
            </form>
        </div>
    </>
  )
}

export default Subscribe