import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import useSEO from '../hooks/useSEO';

const Tech = () => {
  useSEO(
    "Technologies | CodeKarmaTech",
    "Explore the various technologies used by CodeKarmaTech in their projects.",
    "technologies, CodeKarmaTech, web development, software development, tech stack"
  );
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <span className='mt-2 text-center text-white text-sm font-semibold'>{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
