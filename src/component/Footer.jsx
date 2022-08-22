import React from 'react'
import './herosection.css'

const Footer = () => {
  return (
    <>
        <div className='mt-[100px] w-full h-fit lg:flex px-[8%] pb-[100px]'>
            <div className='w-full lg:w-[80%] grid grid-cols-4'>
                <div>
                    <h3 id='small' className='font-medium text-base md:text-2xl text-center'>Resources</h3>
                    <ul id='smaller' className='mt-[20px] cursor-pointer text-center text-xs'>
                        <li className='mt-[25px]'>Application</li>
                        <li className='mt-[25px]'>Documentation</li>
                        <li className='mt-[25px]'>System</li>
                    </ul>
                </div>
                <div>
                    <h3 id='small' className='font-medium text-base md:text-2xl text-center'>Gallery</h3>
                    <ul id='smaller' className='mt-[20px] cursor-pointer text-center text-xs'>
                        <li className='mt-[25px]'>Community</li>
                        <li className='mt-[25px]'>Trending</li>
                        <li className='mt-[25px]'>Picks</li>
                    </ul>
                </div>
                <div>
                    <h3 id='small' className='font-medium text-base md:text-2xl text-center'>Company</h3>
                    <ul id='smaller' className='mt-[20px] cursor-pointer text-center text-xs'>
                        <li className='mt-[25px]'>About Us</li>
                        <li className='mt-[25px]'>Partnership</li>
                        <li className='mt-[25px]'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h3 id='small' className='font-medium text-base md:text-2xl text-center'>Social</h3>
                    <ul id='smaller' className='mt-[20px] cursor-pointer text-center text-xs'>
                        <li className='mt-[25px]'>Facebook</li>
                        <li className='mt-[25px]'>Instagram</li>
                        <li className='mt-[25px]'>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className='w-full mt-[50px] lg:mt-0 lg:w-[20%]'>
                <div className='flex justify-center ml-6 lg:ml-0 lg:justify-start lg:w-[20%]'>
                    <h2 className='font-bold text-3xl'>LawTales</h2>
                    <img src="./asset/gravel.svg" alt="LawTales" />
                </div>
                <p className='text-center lg:text-left my-[15px] w-[100%] break-words'>For any complaint, collaboration or support contact our admin via our mail salamiibrahim1999@gmail.com</p>
                <div className='flex justify-center'>
                    <div className='flex justify-between place-items-center w-[150px]'>
                        <img src="./asset/instagram.svg" alt="Instagram" className='w-[30px] h-[30px] cursor-pointer' />
                        <img src="./asset/whatsapp.svg" alt="WhatsApp" className='w-[30px] h-[30px] cursor-pointer' />
                        <img src="./asset/twitter.svg" alt="Twitter" className='w-[30px] h-[30px] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer