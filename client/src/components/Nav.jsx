import  React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AuthService from "../utils/auth"
import Auth from "../utils/auth"
import Logo from '../assets/giveback-logo-cream.png'
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
    <div className='flex flex-row md:flex items-center justify-between bg-[#df3e56] py-2 md:px-10 px-7'>
    <a href='/'><img className='font-bold object-contain h-20 w-21 cursor-pointer flex items-center font-[Aboreto-Regular] 
    text-[#2B3467]' src={Logo}
    alt=""/></a>
    
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-[#FCFFE7] bg-[#df3e56] gap-2 md:z-auto col-auto left-0 w-full md:w-auto z-[0] md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {AuthService.loggedIn() ? (
          <>
            <Link className="inline-block px-9 py-2.5  text-[#FCFFE7] text-md leading-tight uppercase rounded hover:shadow-lg transition duration-150 ease-in-out" to='/'>Home</Link>

            <Link className="inline-block px-9 py-2.5 text-[#FCFFE7]  text-md leading-tight uppercase rounded hover:shadow-lg transition duration-150 ease-in-out" to='/profile'>Profile</Link>

            <Link className="inline-block px-9 py-2.5  text-[#FCFFE7] text-md leading-tight uppercase rounded hover:shadow-lg transition duration-150 ease-in-out" to='/about'>About Us</Link>
            <Link onClick={Auth.logout} className="inline-block px-9 py-2.5 text-[#FCFFE7] text-md leading-tight uppercase rounded shadow-lg bg-[#191f3d] hover:bg-[#c0def1] hover:text-[#191f3d] active:shadow-lg transition duration-150 ease-in-out" to='/'>Logout</Link>
            </>):(
            <>
            <Link className="inline-block px-9 py-2.5  text-[#FCFFE7] text-md leading-tight uppercase rounded hover:shadow-lg transition duration-150 ease-in-out" to='/'>Home</Link>

            <Link className="inline-block px-9 py-2.5  text-[#FCFFE7] text-md leading-tight uppercase rounded hover:shadow-lg transition duration-150 ease-in-out" to='/about'>About Us</Link>
            
            <Link className="inline-block px-9 py-2.5 text-[#FCFFE7] text-md leading-tight uppercase rounded shadow-lg bg-[#191f3d] hover:bg-[#c0def1] hover:text-[#191f3d] active:shadow-lg transition duration-150 ease-in-out" to='/login'>Login/Sign Up</Link>
            
            </>)}
            
    </ul>
    </div>
  </div>
)
}

export default Nav



