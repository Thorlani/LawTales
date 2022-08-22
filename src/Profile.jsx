import React, {useState} from 'react'
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Subtopic from './component/Subtopic';
import './component/herosection.css'
import Subscribe from './component/subscribe';
import Footer from './component/Footer';
import { Switch } from '@headlessui/react'


const Profile = () => {

    const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Navbar active={''} />
      <Herosection
        title="Salami Ibrahim Olatunji" 
        subtitle="Law Student University of Lagos"
        btn="Edit profile"
        img1="./asset/hand.svg"
        img2="./asset/hands.svg"
        img3="./asset/bulb.svg"
      />
      <Subtopic
        title="My Profile"    
        description=""
      />
      <div className='mt-[100px] px-[8%] flex flex-col item-center justify-between w-full h-[750px]'>
        <div id='btn' className='w-full h-[80px] flex gap-5 justify-between items-center px-[4%]'>
            <img src="./asset/individual.svg" alt="" />
            <p id='para' className='font-semibold lg:text-[28px] break-words relative -left-4'>Salami ibrahim Olatunji</p>
            <span className='hidden md:flex'></span>
        </div>
        <div id='btn' className='w-full h-[80px] flex gap-5 justify-between items-center px-[4%]'>
            <img src="./asset/school.svg" alt="" />
            <p id='para' className='font-semibold lg:text-[28px] break-words relative -left-4'>University Of Lagos</p>
            <span className='hidden md:flex'></span>
        </div>
        <div id='btn' className='w-full h-[80px] flex gap-5 justify-between items-center px-[4%]'>
            <img src="./asset/phone.svg" alt="" />
            <p id='para' className='font-semibold lg:text-[28px] break-words relative -left-4'>08135465599</p>
            <span className='hidden md:flex'></span>
        </div>
        <div id='btn' className='w-full h-[80px] flex gap-5 justify-between items-center px-[4%]'>
            <img src="./asset/mail.svg" alt="" />
            <p id='para' className='font-semibold lg:text-[28px] break-words relative -left-4'>Salamiibrahim1999@gmail.com</p>
            <span className='hidden md:flex'></span>
        </div>
        <div id='btn' className='w-full h-[80px] flex gap-5 justify-between items-center px-[4%]'>
            <img src="./asset/home.svg" alt="" />
            <p id='para' className='font-semibold lg:text-[28px] break-words relative -left-4'>22 Obanikoro road</p>
            <span className='hidden md:flex'></span>
        </div>
        <div id='btn' className='w-full h-[80px] flex gap-5 justify-between items-center px-[4%]'>
            <img src="./asset/light.svg" alt="" />
            <p id='para' className='font-semibold lg:text-[28px] break-words relative -left-4'>Dark Mode</p>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                    enabled ? 'bg-white' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-[#F20505]`}
                />
            </Switch>
        </div>
      </div>
      <div className='flex justify-center w-full mb-[150px]'>
        <button type='button' className='bg-black text-white rounded-[10px] py-3 px-7 font-bold tracking-wider mt-[30px]'>Edit Profile</button>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Profile