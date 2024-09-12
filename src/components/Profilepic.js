import React from 'react';
import pfp from '../profilepic/pfp.jpg';
import Hero from './hero';

export default function Profilepic() {
  return (
    <div className="flex w-full justify-center">
      <div className="hero-section flex justify-center  gap-5">
        <div className="hero-content w-full">
          <Hero />
        </div>
        <div className="profile-picture-container w-full flex justify-start ml-10">
          <div
            className="profile-picture w-[270px] h-[300px]"
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
