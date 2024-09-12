import React from 'react';

import pfp from '../profilepic/pfp.jpg';
import Hero from './hero';
export default function About() {
  return (
     <div className='flex flex-wrap-reverse justify-center items-center'>
       <div className="hero-section w-full flex justify-center  gap-10">
        <div className="hero-content w-full">
          <Hero />
        </div>
        <div className="profile-picture-container w-full flex justify-start ml-10">
          <div
            className="profile-picture w-[350px] h-[350px]"
            style={{
              background: `url(${pfp})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
     </div>
  );
}
