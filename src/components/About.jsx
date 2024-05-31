import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import useSEO from '../hooks/useSEO';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring",
         0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'
      >
        <div
          opitions={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col'
        >
          <img  src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  useSEO(
    "About Us | CodeKarmaTech",
    "Learn more about CodeKarmaTech, our mission, and the tailored technology solutions we provide.",
    "About CodeKarmaTech, technology solutions, mission, digital transformation"
  );
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overviews</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "",0.1,  1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        At CodeKarmaTech, we've collaborated with a diverse array of clients across multiple sectors, 
          enabling us to refine our approach to meet various business needs effectively. 
          Our extensive experience allows us to guide each client towards achieving their strategic goals, 
          turning their vision into reality. 
          Here's an overview of our journey:

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
            {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")