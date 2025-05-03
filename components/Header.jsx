import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
<div className="w-full max-w-3xl mt-5 px-4 text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6">
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
  >
    <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32 sm:w-40 mt-20" />
  </motion.div>

  <motion.h3
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl font-Ovo mb-3"
  >

  </motion.h3>

  <motion.h1
    initial={{ y: -30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="text-2xl sm:text-5xl lg:text-[80px] font-Ovo  leading-tight"
  >
    FULL-STACK DEVELOPER
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base md:text-lg mt-4"
  >
    
    An ambitious Software Engineering undergraduate driven
    by a relentless pursuit of innovation and excellence.
  </motion.p>



        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <motion.a 
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1 }}
  href="#contact"
  className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
>
  contact me <Image src={assets.right_arrow_bold} alt="" className="w-4" />
</motion.a>

<motion.a 
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.2 }}
  href="/Uthpala-Devaki.pdf" 
  download 
  className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-100 transition-colors duration-300"
>
  my resume <Image src={assets.download_icon} alt="" className="w-4" />
</motion.a>

        </div>
    </div>
  )
}

export default Header
