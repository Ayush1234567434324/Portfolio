import React from 'react';
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import waving from "../profilepic/waving.png";

const skillsIcons = [
  { img: "https://skillicons.dev/icons?i=html,css", id: 1 },
  { img: "https://skillicons.dev/icons?i=js,ts", id: 2 },
  { img: "https://skillicons.dev/icons?i=react,next", id: 3 },
  { img: "https://skillicons.dev/icons?i=tailwind,scss", id: 4 },
];

function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <div className="hero-main w-full mb-8 flex flex-col gap-2 ">
          <div className="hero-header mb-6 flex flex-col gap-2">
            <div className="flex items-center  icon-flex gap-2">
             
              <h1
                className="font-bold hero-title"
                style={{
                  fontSize: '4rem',
                  textAlign: 'left',
                  lineHeight: '1.2',
                  color: '#2d2e32',
                }}
              >
                Full-Stack Developer
              </h1>
            </div>
            <p
              className="pt-5 hero-description"
              style={{
                textAlign: 'left',
                fontSize: '1.2rem',
                color: '#555',
              }}
            >
              Hi, I'm Ayush Bhandari, a dedicated Full Stack Developer and a Competitive programmer from India.
            </p>
            <div className=" flex icon-flex gap-4 mt-8">
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/ayush-bhandari/"
              >
                <IconBrandLinkedin width={32} height={32} />
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ayushbhandari-dev"
              >
                <IconBrandGithub width={32} height={32} />
              </a>
            </div>
          </div>

          <div className="tech-stack w-full">
            <p className="tech-stack-title text-xl font-semibold">
              Tech Stack
              <hr className="tech-stack-divider mt-2 mb-4 w-32 border-t-2 border-black" />
            </p>
            <div className="tech-stack-icons">
              <ul className="flex flex-wrap gap-12 justify-start tech-stack-icons-center">
                {skillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img src={icon.img} alt="skill-icon" className="w-20" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
