import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './herosection.css'

const Navbar = ({active}) => {

  const [isToggle, setIsToggle] = useState(false)

  const showMenu = () => {
      setIsToggle(!isToggle)
  }

  const [showBtn, setShowBtn] = useState(false)

  const isButtonActive = () => {
    setShowBtn(!showBtn)
  }

  return (
    <>
        <nav className="relative px-[8%] pt-[6%] md:pt-[2%] pb-[3%] flex flex-row-reverse lg:flex-row items-center md:items-baseline justify-between w-[100%]">
            <div id='title' className='flex items-center w-[20%]'>
                <h2 className='font-bold text-3xl'>LawTales</h2>
                <img src="./asset/gravel.svg" alt="LawTales" />
            </div>
            <div className='w-[70%] relative'>
              <ul className='hidden relative lg:flex items-center justify-between w-[100%]'>
                <li className={active === 'home' ? "w-[60px] border-b-[3px] border-black text-center" : ''}>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className={active === 'field' ? 'w-[108px] border-b-[3px] border-black text-center' : ''}>
                  <NavLink to={'/field'}>Fields of Law</NavLink>
                </li>
                <li className={active === 'ask' ? 'w-[108px] border-b-[3px] border-black text-center' : ''}>
                  <NavLink to={'/ask'}>Ask Question</NavLink>
                </li>
                <li className={active === 'answer' ? 'w-[136px] border-b-[3px] border-black text-center' : ''}>
                  <NavLink to={'/answer'}>Answer Question</NavLink>
                </li>
                <li className={active === 'about' ? 'w-[80px] border-b-[3px] border-black text-center' : ''}>
                  <NavLink to={'/about'}>About us</NavLink>
                </li>
                <div className='relative'>
                  <button onClick={isButtonActive} className='flex items-center justify-between bg-black rounded-[12px] w-[90px]'>
                    <div className='w-[30px] h-[30px] rounded-[50%] bg-red-300 relative -left-1'></div>
                    <img src="./asset/profile.svg" alt="profile" className='ml-[12px] w-4 relative right-4' />
                  </button>
                  <ul id='btn' className={showBtn ? 'bg-black absolute z-50 w-fit h-fit text-center' : 'hidden'}>
                    <li className='px-2 py-1 text-sm cursor-pointer'>
                      <NavLink to={'/profile'}>My Profile</NavLink>
                    </li>
                    {/* <li className='px-2 py-1 text-sm'>Notification</li>
                    <li className='px-2 py-1 text-sm'>Change password</li>
                    <li className='px-2 py-1 text-sm'>Logout</li> */}
                  </ul>
                </div>
              </ul>
              <ul className={`${ isToggle ? 'flex' : 'hidden'} fixed overflow-hidden z-[60] top-0 left-0 w-[100vw] h-[100vh] bg-black flex-col items-center justify-center lg:hidden`}>
                <li className='text-[white] absolute top-[100px]'>
                <NavLink
                    to='/'
                >
                    Home
                </NavLink>
                </li>
                <li className='text-[white] absolute top-[180px]'>
                <NavLink
                    to='/field'
                >
                    Fields of Law
                </NavLink>
                </li>
                <li className='text-[white] absolute top-[260px]'>
                <NavLink
                    to='/ask'
                >
                    Ask Question
                </NavLink>
                </li>
                <li className='text-[white] absolute top-[340px]'>
                <NavLink
                    to='/answer'
                >
                    Answer Question
                </NavLink>
                </li>
                <li className='text-[white] absolute top-[420px]'>
                <NavLink
                    to='/about'
                >
                    About us
                </NavLink>
                </li>
                <li className='text-[white] absolute top-[500px]'>
                <NavLink to={'/profile'}
                >
                    My Profile
                </NavLink>
                </li>
              </ul>
            </div>
            <button onClick={showMenu} className={`${isToggle && 'fixed z-[60] left-[8%] md:top-[6%]'} lg:hidden`}>
              <div className={`w-[21px] h-[2px] ${isToggle ? 'bg-[white] ease-in duration-300 -rotate-45 transition-transform translate-y-[1px] translate-x-[1px]' : 'bg-[black]'}`}></div>
              <div className={`${isToggle ? 'hidden' : 'flex'} w-[21px] h-[2px] bg-[black] my-1`}></div>
              <div className={`w-[21px] h-[2px] ${isToggle ? 'bg-[white] ease-in duration-300 rotate-45 transition-transform -translate-y-[0.5px] translate-x-[1px]' : 'bg-[black]'}`}></div>
            </button>

        </nav>    
    </>
  )
}

export default Navbar