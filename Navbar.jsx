import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import assets from '../assets/assets.js'

const Navbar = () => {
  const navigate = useNavigate();
  //const [showMenu, setShowMenu] = React.useState(false);
  const [token, setToken] = React.useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-2 mb-2 border-b border-b-gray-300'>
      <img className='w-44 cursor-pointer' src={logo} alt="Book My Lecture Logo" style={{ width: 150 }} />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to={'/'}>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/venues'}>
          <li className='py-1'>Venues</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full cursor-pointer' src={assets.profile_pic} alt="" />
            <img className='w-2.5 cursor-pointer' src={assets.dropdown_icon} alt="" />

            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-lectures')} className='hover:text-black cursor-pointer'>My Lectures</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => navigate('login')} 
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
          >
            Login
          </button>
        )} 
      </div>
    </div>
  )
}

export default Navbar;
