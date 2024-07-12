import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import Cards from "@/components/homePage/cards"

export default function App() {
    return (
        <div className=" mt-16">
            <div className="text-center dark:text-white text-2xl mt-10 mb-5 font-bold text-black animate-slide-in-from-bottom transition">
                ⚡Course Advantage⚡
            </div>
           
            <div className="bg-gradient-to from-white via-blue-100 to-white">
                <Cards/>
            </div>


        </div>
    );
}
