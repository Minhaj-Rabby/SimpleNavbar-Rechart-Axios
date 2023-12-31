import React, { useState } from 'react';
import Link from '../Link/Linkd.js'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open,setOpen]=useState(false)
    const routes =[
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'Products', path:'/products'},
        {id:3, name:'Orders', path:'/orders'},
        {id:4, name:'Contact', path:'/contact'},
        {id:5, name:'About', path:'/about'},
    ]
    return (
        <nav className='w-full h-8 bg-slate-400 '>
           <div onClick={()=>setOpen(!open)} className="h-6 w-6 text-black-500 md:hidden items-center ">
           {
                open ? <XMarkIcon/>: <Bars3Icon/>
            }
           </div>
             
            <ul className={`bg-slate-400 mb-3 md:flex justify-center absolute duration-500 w-full ease-in md:static ${open ? 'top-6': 'top-[-120px]'}`}>
             
             {
            routes.map(route=><Link  key={route.id} route={route}></Link >)
             }

            </ul>
        </nav>
    );
};

export default NavBar;