import React from 'react'
import AppImage from '@/public/datastuctures.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

const webCourses = () => {
    return (
        <div className=' flex justify-center'>
            <div className='hover:scale-110 transition duration-300'>
            <div className='mt-10  flex justify-center  flex-col md:flex-row hover:scale-110 border-2 rounded-lg shadow-md p-9 max-w-[970px] bg-gray-50 dark:bg-gray-900 hover:border-[#F50057] transition animate-slide-in-from-right hover:shadow-[#F50057] '>
                <div className='mr-5 max-h-36  flex justify-center md:justify-start'>
                    <Image src={AppImage} alt="web" height={300} width={350} className='object-contain' />
                </div>
                <div>
                    <div className='ml-5 dark:text-[#F50057] mt-5 md:mt-0 text-xl md:text-2xl font-bold '>
                        Data Structures and Algorithm 
                    </div>
                    <div className='ml-5 mt-2 text-[13px] md:text-[16px]'>
                    This course propels you from beginner to building complex solutions.  Master data structures, algorithms, and impress recruiters – all in one program.  Explore More!<br/> & Make More!</div>
                    <div className='mt-9 ml-5'>
                    <Button color="danger" variant="ghost" as={Link} href='/dsa'>
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