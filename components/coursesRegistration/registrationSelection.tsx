"use client";
import Image from "next/image";
import React, { useState } from "react";
import { WobbleCard } from "../ui/wobble-card";
import App from "@/public/appdev.svg"
import Cloud from "@/public/cloud.svg"
import Dsa from "@/public/datastuctures.svg"
import Web from "@/public/webdev.svg"
import { Button } from "@nextui-org/button";


export default function WobbleCardDemo() {
    function MyComponent() {
        const [hasShadow, setHasShadow] = useState(false);
      }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Data Strucures and Algoritms
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        This course propels you from beginner to building complex solutions. Master data structures, algorithms, and impress recruiters – all in one program. Explore More!
                    </p>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4 w-[200px] ">
                        Select DSA
                    </Button>
                </div>
                <Image
                    src={Dsa}
                    width={500}
                    height={500}
                    alt="DSA"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    App Development
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    The course takes you starting from no stock knowledge, to the stage where you develop your own full fledged applications. It also contains the untold factors to fascinate recruiters.

                </p>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4 w-[200px]">
                        Select Android Dev
                    </Button>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        App Dev and Cloud Computing
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Imagine building the next game-changing app. With app dev and cloud skills, you'll code it AND store it on a powerful, scalable platform - making your dream app a reality for millions!
                    </p>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4 w-[350px]">
                        Select Android Dev & Cloud Computing
                    </Button>
                </div>
                <Image
                    src={Web}
                    width={500}
                    height={500}
                    alt="web and cloud"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Cloud Computing
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    Become a cloud architect, not just a coder! This course empowers complete beginners to design and deploy powerful cloud applications. Master the tools and strategies that make recruiters stand up and take notice, all within one comprehensive program.
                    </p>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4 w-[200px]">
                        Select Cloud Computing
                    </Button>
                </div>
                <Image
                    src={Cloud}
                    width={500}
                    height={500}
                    alt="DSA"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Web Development
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Unlock your web development potential! This course transforms complete beginners into web application architects. Master the in-demand skills and gain the edge employers crave, all in a single program.

                </p>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4 w-[200px]">
                        Select Web Dev
                    </Button>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Web Dev and Cloud Computing
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Think of the web as the ocean - vast, informative, and accessible to all. But where does all that information come from? Cloud computing is like the underwater world - a hidden network of servers storing and processing all that data, keeping the web alive and flowing.
                    </p>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4 w-[350px]">
                        Select Web Dev & Cloud Computing
                    </Button>
                </div>
                <Image
                    src={Web}
                    width={500}
                    height={500}
                    alt="web and cloud"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            
        </div>
    );
}
