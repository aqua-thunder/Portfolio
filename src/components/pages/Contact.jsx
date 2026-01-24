import React from 'react'
import { Link } from 'react-router';
import { TbBrandLinkedin } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import AnimatedSection from '../common/AnimatedSection';
const Contact = () => {
  return (
    <>
      <div className="line h-[1px] w-full bg-gray-700"></div>
      <AnimatedSection className='max-w-7xl px-6 sm:px-10 lg:px-0 mx-auto py-28 md:py-20 lg:py-28 
      grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 text-white'>

        {/* Left Section */}
        <div className='space-y-4 text-center lg:text-left'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
            Let's have
          </h2>

          <span className='block text-[#00ff88] text-3xl sm:text-4xl lg:text-5xl font-bold'>
            a Chat
          </span>

          <p className='text-lg sm:text-xl lg:text-2xl text-gray-400 mt-6 max-w-xl mx-auto lg:mx-0'>
            Want to chat design, products, anything digital or just grab a smoothie? Hit me up!
          </p>

          {/* Animated Button */}
          <a
            href="mailto:gandhiayush291@gmail.com?subject=Portfolio%20Contact&body=Hi%20Ayush,%0D%0A%0D%0AI%20discovered%20your%20portfolio%20and%20would%20be%20happy%20to%20get%20in%20touch%20with%20you."
            className="group px-8 py-3 rounded-full font-semibold text-black 
             bg-[#00ff88] hover:bg-[#00e67a] shadow-lg shadow-[#00ff88]/30 
             transition-all duration-300 hover:-translate-y-1 hover:scale-105 
             flex items-center justify-center gap-3 mt-8 mx-auto lg:mx-0 cursor-pointer lg:w-[11vw]"
          >
            <span>Let's Chat</span>
          </a>

        </div>

        {/* Right Section */}
        <div className='mt-6 lg:mt-10 font-bold text-xl sm:text-2xl space-y-6 
        w-full text-center lg:text-left'>

          <div className='text-gray-400 font-semibold text-base sm:text-lg lg:text-sm'>
            GET IN TOUCH
          </div>

          <div className='break-all sm:break-normal'>
            gandhiayush291@gmail.com
          </div>

          <div className='flex items-center justify-center lg:justify-start gap-4'>
            <IoCallOutline className='text-2xl' />
            <span className='text-lg sm:text-xl'>+91 06204810</span>
          </div>

          <span className='block text-gray-400 font-semibold text-base sm:text-lg mt-6'>
            FOLLOW ME
          </span>

          {/* Social Icons */}
          <div className='flex justify-center lg:justify-start gap-5 mt-4'>

            {/* LinkedIn */}
            <Link to={"https://www.linkedin.com/in/ayush-gandhi-765899287/"} target='_blank' className='group border border-gray-600 rounded-2xl p-3 
            text-2xl sm:text-3xl cursor-pointer
            transition-all duration-300 
            hover:border-[#00ff88] hover:scale-110 hover:-translate-y-1 
            hover:shadow-lg hover:shadow-[#00ff88]/30'>
              <TbBrandLinkedin className='group-hover:text-[#00ff88]' />
            </Link>

            {/* Mail */}
            <a a
              href="mailto:gandhiayush291@gmail.com?subject=Portfolio%20Contact&body=Hi%20Ayush,%0D%0A%0D%0AI%20discovered%20your%20portfolio%20and%20would%20be%20happy%20to%20get%20in%20touch%20with%20you."
              className='group border border-gray-600 rounded-2xl p-3 
            text-2xl sm:text-3xl cursor-pointer
            transition-all duration-300 
            hover:border-[#00ff88] hover:scale-110 hover:-translate-y-1 
            hover:shadow-lg hover:shadow-[#00ff88]/30'>
              <MdOutlineMailOutline className='group-hover:text-[#00ff88]' />
            </a>
          </div>
        </div>

      </AnimatedSection>
    </>
  )
}

export default Contact
