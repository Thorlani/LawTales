import React from 'react'

const Search = () => {
  return (
    <>
        <div className='px-[8%] flex justify-center items-center mt-[100px]'>
          <form className='flex items-center'>
            <input 
              type="search" 
              placeholder='Search case' 
              className='h-[59px] w-[200] sm:w-[310px] md:w-[460px] border-[1px] border-black rounded-l-[10px] outline-none indent-4 text-xl'

            />
            <button className='h-[60px] w-[100px] sm:w-[160px] md:w-[220px] bg-black text-white rounded-r-[10px]'>Search</button>
          </form>
        </div>
    </>
  )
}

export default Search