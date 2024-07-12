"use client"
import React, { useEffect } from 'react'
import Web from '@/public/webdev.svg'
import Image from 'next/image'
import WebCard from "@/components/webncloudDetail/webncloudCard"
import { Button } from '@nextui-org/button'
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'

const page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);
  return (
    <div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              READ BEFORE YOU REGISTER
            </ModalHeader>
            <ModalBody>
              <h1>
                1. 75% attendance is mandatory for course consideration and
                for certificate issue <br/><br/> 
                2. No student should apply more than one
                course except bundle courses (only one bundle course is
                allowed for one as it consists two courses in it) <br/><br/>
                3. All Quizzes and practice sets need to be solve for certification <br/><br/> 
                4. Discipline is mandatory as no mis behaviour will be
                entertained with other students or mentors  <br/><br/>
                5. You need to join classes right on time  <br/><br/>
                6. During class time camera should be
                opened so that the mentors can assure you are properly focussed in the session.
              </h1>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Ok
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
    <div className='flex items-start flex-col md:flex-row '>
      <div className='animate-slide-in-from-left '>
        <WebCard />
      </div>
      <div className='w-full md:w-2/4 text-4xl text-[#ffa600] text-left md:ml-16 md:mt-10 font-bold'>
        <div className='animate-appearence-in-view'>Web and Cloud bundle</div>

        <div className='flex items-start flex-col md:flex-row'>
          <div className=' animate-appearence-in-view w-2/4 text-4xl text-black dark:text-white text-left font-bold'>
            Bootcamp
          </div>
          <div className='animate-slide-in-from-right text-[11px] md:text[13px] text-yellow-400'>
            20 days | All Levels | For Beginners
          </div>
        </div>
        <div className=' animate-slide-in-from-right text-[15px] md:text-[20px] mt-10 md:mt-16 text-gray-600 dark:text-gray-400'>
          ✔️ Beginner to advance<br />
          ✔️ Basic to Industry tech <br />
          ✔️ Custom Playlist for Flexibility<br />
          ✔️ Live Project<br />
          ✔️ Q/A Sessions<br />
        </div>
        <div className='animate-slide-in-from-right text-[15px] md:text-[17px] text-black dark:text-white mt-16  md:mt-5'>
          This course allows one to start from the beginning and advance over a period of time in concepts of React JS, Tailwind CSS and Backend
          services like hosting and data management. Allowing one to become capable to grab internships for further development in Cloud or web.
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-purple-800 dark:text-purple-600 font-bold mt-5'>
          👈🏾 Know in-depth details in our free webinar 
        </div>
      </div>
    </div>
    </div>
  )
}

export default page