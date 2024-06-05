"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaRegImage } from "react-icons/fa6";

export default function Lessons() {
    const [AllLessons, setAllLessons] = useState(undefined)

    const getAllLessons = async () => {
        let res = await fetch('http://localhost:3000/api/lessons')
        let data = await res.json()
        setAllLessons(data.data)
    }

    useEffect(() => {
        getAllLessons()
    }, [])

    return (
        <div className="flex flex-col gap-6">
            {
                AllLessons ? AllLessons.map((item) => (
                    <Link href={`/lessons/${item._id}`} className="box flex flex-col sm:flex-row border-b-[1px] border-gray-800 py-4 lg:mx-28 xl:mx-36 2xl:mx-48">
                        <div className="left">
                            <Image src="/hero.png" height={150} width={150} className="rounded-lg w-full h-full object-cover" />
                        </div>
                        <div className="right mt-4 space-y-2 sm:mt-0 sm:py-4 sm:px-4 flex flex-col sm:w-full">
                            <div className="tag flex items-center justify-between">
                                <div className="lesson font-bold text-sky-500">Lesson 1</div>
                                <div className="time text-gray-200">25:35</div>
                            </div>
                            <div className="title font-semibold text-lg">Introduction to computer science</div>
                            <div className="para text-gray-300">We will be discussing the important subjects within the scope of computer science.</div>
                        </div>
                    </Link>
                )) : <>
                    <div className="box flex flex-col sm:flex-row bg-gray-800 rounded-lg py-4 lg:mx-28 xl:mx-36 2xl:mx-48 animate-pulse">
                        <div className="left px-4">
                            <div className="md:ml-4 sm:w-60 h-60 bg-gray-800 ring-2 ring-gray-700 md:h-full rounded-lg flex items-center justify-center text-gray-700">
                                    <FaRegImage size={80}/>
                            </div>
                        </div>
                        <div className="right mt-4 space-y-2 sm:mt-0 sm:py-4 sm:px-4 flex flex-col sm:w-full px-4">
                            <div className="tag flex items-center justify-between">
                                <div className="bg-gray-700 w-[25%] h-4"></div>
                            </div>
                            <div className="w-[45%] h-6 bg-gray-700"></div>
                            <div className="h-4 bg-gray-700 w-full"></div>
                            <div className="h-4 bg-gray-700 w-[70%]"></div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
