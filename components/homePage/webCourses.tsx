import React from 'react'
import WebImage from '@/public/webdev.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

const webCourses = () => {
    return (
        <div className=' flex justify-center hover:scale-110 transition duration-300'>
            <div className='mt-10 max-h-42 flex justify-center flex-col md:flex-row border-2 rounded-lg shadow-md p-9 max-w-[970px] bg-gray-50 dark:bg-gray-900 hover:border-blue-600 transition hover:scale-110 animate-slide-in-from-left hover:shadow-blue-600 dark:hover:shadow-blue-600'>
                <div className='mr-5 flex justify-center md:justify-start'>
                    <Image src={WebImage} alt="web" height={300} width={400} className=' object-contain' />
                </div>
                <div>
                    <div className='ml-5 dark:text-blue-500 mt-3 md:mt-3 text-xl md:text-2xl font-bold '>
                        Web Development
                    </div>
                    <div className='ml-5 mt-2 text-[13px] md:text-[16px]'>
                    Unlock your web development potential! This course transforms complete beginners into web application architects.  Master the in-demand skills and gain the edge employers crave, all in a single program.
                    </div>
                    <div className='mt-9 ml-5'>
                    <Button color="primary" variant="ghost" as={Link} href='/web'>
                        Explore More
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default webCourses