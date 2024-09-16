import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './navbar/Contact';
import { Footer } from './navbar/Footer';
import Navbar from './navbar/Navbar';

function App() {
  const [mode, setMode] = useState('light');

  // Toggle dark/light mode and persist it in localStorage
  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newMode);
      return newMode;
    });
  };

  // Load mode from localStorage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <main className="pt-16">
        <About />
      </main>
      <section className="pt-10 ml-[5%] flex flex-col justify-center w-[90%]">
        <Contact mode={mode} />
      </section>
      <footer className="pt-28">
        <Footer mode={mode} />
      </footer>
    </>
  );
}

export default App;
