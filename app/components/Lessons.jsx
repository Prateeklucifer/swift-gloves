import Image from 'next/image'
import React from 'react'

export default function Lessons() {
    return (
        <div className="flex flex-col gap-6">
            <div className="box flex flex-col sm:flex-row border-b-[1px] border-gray-800 py-4 lg:mx-28 xl:mx-36 2xl:mx-48">
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
            </div>
        </div>
    )
}
