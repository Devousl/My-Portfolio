'use client'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
      id='about'
      className='w-full px-[22%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
     

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo text-white'
      >
  This is me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.profile_img} alt='user' className='w-32 rounded-3xl mx-auto' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo text-white  mx-auto  text-sm sm:text-base text-center sm:text-center  md:text-lg mt-4'>
          An ambitious Software Engineering undergraduate driven
by a relentless pursuit of innovation and excellence.
Passionate about building cohesive teams, fostering open
communication, and driving meaningful change, all while
ensuring every task is executed with precision and
success.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl sm:items-center  '
          >
            {infoList.map(({ iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border border-white rounded-xl p-6 cursor-pointer hover:bg-darkHover/50 hover:-translate-y-1 duration-500 hover:shadow-white'
                key={index}
              >
                <Image src={iconDark} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-white'>{title}</h3>
                <p className='text-white/80 text-sm'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-white/80 font-Ovo'
          >
          
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-4 sm:gap-5'
          >
         
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
