import  React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AuthService from "../utils/auth"
import Auth from "../utils/auth"
import Logo from '../assets/logo.png'
const Nav = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"ABOUT",link:"/about"},
    {name:"PORTFOLIO",link:"/portfolio"},
    {name:"CONTACT",link:"/contact"},
    {name:"RESUME",link:"/resume"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full top-0 left-0'>
    <div className='flex flex-col md:flex items-center justify-between bg-[#FCFFE7] py-2 md:px-10 px-7'>
    <img className='font-bold object-contain h-20 w-21 cursor-pointer flex items-center font-[Aboreto-Regular] 
    text-[#2B3467]' src={Logo}
    alt=""/>
    
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FCFFE7] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {AuthService.loggedIn() ? (
          <>
  
            <Link className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/profile'>Profile</Link>
            <Link onClick={Auth.logout} className="inline-block px-9 py-2.5 bg-pink-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/'>Logout</Link>
            </>):(
            <>
            <Link className="inline-block px-9 py-2.5 bg-pink-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/login'>Login/Sign Up</Link>
            
            </>)}
        <Link className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/'>Home</Link>
        <Link className="inline-block px-9 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/about'>About Us</Link>
    </ul>
    </div>
  </div>
)
}

export default Nav



