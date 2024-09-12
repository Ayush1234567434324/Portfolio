
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Profilepic from './components/Profilepic';
import Contact from './navbar/Contact';
import Navbar from './navbar/Navbar';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  
  return (
  <>
    <Navbar mode={mode} toggleMode={toggleMode} />
  <div className='pt-12'></div>
   <About/>   
   <div className='pt-10'></div>
   <div className='test ml-[5%] flex flex-col justify-center w-[90%]'>
    <Contact mode={mode}/>
    </div>
   

  </>
      
 
  );
}

export default App;
