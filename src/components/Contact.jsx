import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        reset(); // Reset the form after successful submission
        alert('Message sent, we will reach you soon.');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div id='contact' className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Call us</p>
        <p className='text-white font-medium mb-4'>+91 7575053969</p>
        <p className='text-white font-medium mb-4'>+91 7984891664</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              {...register('name', { required: 'Name is required' })}
              onChange={handleChange}
              placeholder='What is your Name ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                },
              })}
              onChange={handleChange}
              placeholder='What is your Email ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Phone Number</span>
            <input
              type='tel'
              name='phone_number'
              {...register('phone_number', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                  message: 'Invalid phone number',
                },
              })}
              onChange={handleChange}
              placeholder='Your Phone Number'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.phone_number && <span className='text-red-500'>{errors.phone_number.message}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              {...register('message', { required: 'Message is required' })}
              onChange={handleChange}
              placeholder='Tell us what you need'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit
             text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );  
};

export default SectionWrapper(Contact, 'Contact');
