import React from 'react';

const Navbar = ({ mode, toggleMode }) => {
  return (
    <nav className={`p-4 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1>My Website</h1>
      {/* Step 5: Button to toggle the mode */}
      <button onClick={toggleMode} className="ml-auto">
        {mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
