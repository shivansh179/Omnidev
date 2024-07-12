import React from 'react'
import LearningHome from '@/public/learn.svg'
import Image from 'next/image'
import { Orbitronn } from '@/config/fonts'


const page = () => {


  return (
    <div>
      <div className='h-full sm:max-h-[500px] w-full sm:max-w-[1250px] bg-[#934fca] p-16 rounded-[50px] hover:shadow-lg transition'>
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-start'>
          <div className='animate-appearence-in-view transition-all duration-300 mb-8 md:mb-0'>
            <Image src={LearningHome} alt='learn' height={1000} width={500} />
          </div>
          <div>
            <div className='text-5xl md:text-7xl text-[#b1dedd] font-extrabold animate-appearence-in-view transition-all duration-300 mb-0 md:mb-0'>
            <div className='text-[13px] text-teal-100 ml-36 md:ml-64 mb-2 md:mb-0 sm:mt-0'>
                Powered By CIIE 🚀
              </div>
              
              <div className={Orbitronn.className}>
                CIIE OmniDev
              </div>
            </div>
            <div className=''>
              <div className='text-16 text-white ml-24 md:ml-52 mb-8 md:mb-0 sm:mt-0'>
                Curative course kit
              </div>
              
            </div>
            <div className='text-[18px] text-center md:text-left md:ml-10 text-[#ffffea] md:text-xl md:mt-16 max-w-[500px] animate-slide-in-from-right mb-8 md:mb-0'>
              Become a full-fledged developer with in-demand skills in web development, app development, and cloud computing. This curated course kit equips you for a versatile tech career.
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default page