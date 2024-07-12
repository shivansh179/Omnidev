"use client";
import React from "react";
import Web from "@/public/webdev.svg";
import Image from "next/image";
import WebCard from "@/components/appdetail/appCard";
import { Poppinss } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";

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
      <div className="flex items-start flex-col md:flex-row ">
        <div className="animate-slide-in-from-left ">
          <WebCard />
        </div>
        <div className="w-full md:w-2/4 text-4xl text-green-500 text-left md:ml-16 font-bold md:mt-20">
          <div className="animate-appearence-in-view">App Dev Launchpad</div>

          <div className="flex items-start flex-col md:flex-row">
            <div className=" animate-appearence-in-view w-2/4 text-4xl text-black dark:text-white text-left font-bold">
              Bootcamp
            </div>
            <div className="animate-slide-in-from-right text-[13px] text-green-400">
              20 days | All Levels | For Beginners
            </div>
          </div>
          <div className=" animate-slide-in-from-right text-[17px] md:mt-16 text-gray-600 dark:text-gray-400">
            ✔️ Beginner to advance
            <br />
            ✔️ Native Android + Cross Platform
            <br />
            ✔️ Custom Playlist for Flexibility
            <br />
            ✔️ Live Project
            <br />
            ✔️ Q/A Sessions
            <br />
          </div>
          <div className="animate-slide-in-from-right text-[17px] text-black mt-5  dark:text-white">
            Let's dive into the ocean of native and cross platform apps starting
            from native android app development and landing on the final shore
            of cross platform app development using Flutter. Meanwhile we make 3
            projects and learn real life applications of various
            tools and utilities.
          </div>

          <div className="animate-slide-in-from-right text-[17px] text-green-800 dark:text-green-600 font-bold mt-5">
            👈🏾 Know in-depth details in our free webinar
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
