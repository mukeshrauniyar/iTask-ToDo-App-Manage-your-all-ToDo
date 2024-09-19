import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-700 text-white py-2'>
       <div className="logo">
        <span className='font-bold text-xl m-8'>iTask</span>
       </div>

       <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'> Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
       </ul>
    </nav>
  )
}

export default Navbar
