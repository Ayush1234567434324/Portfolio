import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = ({ mode, toggleMode }) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className={`flex justify-between items-center h-24 mx-auto px-4 ${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Logo */}
      <div className='flex flex-row gap-4'>
      <h1 className={`w-full text-[] font-bold ${mode === 'dark' ? 'text-[#00df9a]' : 'rgb(75, 75, 75)'}`}>Ayush.dev
      </h1>
      <div>     <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={mode === 'dark'}
        onChange={toggleMode}  // Removed redundant isDarkMode state
        moonColor='yellow'
        sunColor='orange'
        size={35}
      /></div>
      
      </div>
    
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 rounded-xl m-2 cursor-pointer duration-300 ${mode === 'dark' ? 'hover:bg-[#00df9a] hover:text-black' : 'hover:bg-blue-500 hover:text-white'}`}
          >
            {item.text}
          </li>
        ))}
        
      </ul>


      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? `fixed md:hidden left-0 top-0 w-[60%] h-full border-r ${mode === 'dark' ? 'border-r-gray-900 bg-[#000300] text-white' : 'border-r-gray-200 bg-white text-black'} ease-in-out duration-500`
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
        style={{ zIndex: 9 }}
      >
        {/* Mobile Logo */}
        <div className='flex flex-row'>
        <h1 className={`w-[50%] text-[28px] font-bold m-4 ${mode === 'dark' ? 'text-[#00df9a]' : 'text-black'}`}>Ayush.dev</h1>

      <div className='mt-4'>     <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={mode === 'dark'}
        onChange={toggleMode}  // Removed redundant isDarkMode state
        moonColor='yellow'
        sunColor='black'
        size={35}
      /></div>
      </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600 ${mode === 'dark' ? 'hover:bg-[#00df9a] hover:text-black' : 'hover:bg-blue-500 hover:text-white'}`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
