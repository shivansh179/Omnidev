import React from 'react'
import CloudImage from '@/public/cloud.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

const webCourses = () => {
    return (
        <div className=' flex justify-center '>
            <div className='hover:scale-110 transition duration-300'>
            <div className='mt-10  flex justify-center flex-col md:flex-row border-2 rounded-lg shadow-md p-9 max-w-[970px] bg-gray-50 dark:bg-gray-900 hover:border-purple-600 transition animate-slide-in-from-left hover:shadow-purple-600 dark:hover:shadow-purple-600'>
                <div className='mr-5 max-h-36 flex justify-center md:justify-start'>
                    <Image src={CloudImage} alt="web" height={300} width={470} className='object-contain' />
                </div>
                <div>
                    <div className='ml-5 dark:text-purple-500 text-xl mt-8 md:mt-0 md:text-2xl font-bold '>
                       Cloud Computing
                    </div>
                    <div className='ml-5 mt-2 text-[13px] md:text-[16px]'>
                    Become a cloud architect, not just a coder! This course empowers complete beginners to design and deploy powerful cloud applications. Master the tools and strategies that make recruiters stand up and take notice, all within one comprehensive program.
                    </div>
                    <div className='mt-9 ml-5'>
                    <Button color="secondary" variant="ghost" as={Link} href='/cloud'>
                        Explore More
                    </Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default webCourses