import React, { useState } from 'react';
import img from '../profilepic/contact.png';

const Contact = (props) => {

 const mode = props.mode;


  return (
    <>
      <div className="mb-0 pt-13">
        <iframe 
          className={`map ${mode}`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7856.287944082162!2d83.74676433355498!3d26.486371188901956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993dab19c9821b5%3A0xc77f786074db83d9!2sKatrari%2C%20Uttar%20Pradesh%20274001!5e0!3m2!1sen!2sin!4v1725373945900!5m2!1sen!2sin"
          width="100%" 
          height="250" 
          style={{ border: 0 }}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
      
        ></iframe>
      </div>
      <div className='flex flex-col md:flex-row p-2 items-center pb-10'>
        <div className='text-center md:text-left md:w-1/2'>
          <h1 className="text-center font-bold text-3xl py-2 text-[#071952] ">Contact-Us</h1>
          <p className="text-center text-[#071952] py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi omnis numquam beatae.</p>
          <img src={img} alt="Contact" className="mx-auto h-60  mt-2" />
        </div>
        
        <div className='w-full md:w-[30%]  mx-auto mt-9 space-y-3 p-9 border border-black/30 rounded-lg shadow-2xl bg-white'>
          <label className="flex items-center gap-2 border border-black/30 rounded-lg p-2 bg-[#F7F7F8] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:text-slate-300">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow outline-none focus:outline-none bg-[#F7F7F8] overflow-hidden"
              placeholder="Email"
            />
          </label>

          <label className="flex items-center gap-2 h-[250px] border border-black/30 rounded-lg p-2 bg-[#F7F7F8]">
            <textarea
              className="grow outline-none focus:outline-none resize-none h-full bg-[#F7F7F8]"
              placeholder="Enter your Query">
            </textarea>
          </label>

          <div className="flex items-center justify-center">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
