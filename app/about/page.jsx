"use client"

import React, { useEffect, useState } from 'react'

export default function LessonPage() {
    const [About, setAbout] = useState(undefined);

    const getAbout = async () => {
        let res = await fetch("http://localhost:3000/api/about");
        let data = await res.json();
        setAbout(data.data);
    };

    useEffect(() => {
        getAbout();
    }, []);
    return (
        <>
            <div className="md:px-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="flex flex-col gap-3 items-center md:px-10 lg:px-32 xl:px-64 2xl:px-72">
                        <div className="heading font-bold text-white text-4xl mt-8 md:mt-14 md:text-center">About Swift Gloves</div>
                        <div className="para text-white mt-3 md:text-center md:px-20">     {About && About[0].para1}</div>
                    </div>
                </div>
            </div>
            <section className="px-4 py-9 container m-auto">
                <div className="lg:flex">
                    <div className="hidden lg:flex justify-center items-center lg:w-1/2 xl:w-[40%] lg:px-6 xl:px-14 h-fit">
                        <img
                            src="/about.png"
                            alt=""
                            className="rounded-xl lg:h-full w-full object-cover"
                            loading="lazy"
                        />
                        {/* <img
            src="tubelight.png"
            alt=""
            className="rounded-xl lg:h-[384px] w-full object-cover"
          /> */}
                    </div>
                    <div className="lg:w-1/2 lg:pr-6 xl:pr-14 xl:w-[60%] flex flex-col justify-center">
                        <div className="box rounded-md px-6 sm:px-5 lg:px-8 py-6 md:py-8  md:flex items-center">
                            <div className="right">
                                <h3 className="text-lg lg:text-xl font-bold mb-2 text-center md:text-start md:mb-0 text-[#00FFFF]">
                                    Our Mission
                                </h3>
                                <p className="text-center lg:text-start">
                                    {About && About[0].para2}
                                </p>
                            </div>
                        </div>
                        <div className="box rounded-md px-6 sm:px-5 lg:px-8 py-6 md:py-8  md:flex items-center">
                            <div className="right">
                                <h3 className="text-lg lg:text-xl font-bold mb-2 text-center md:text-start md:mb-0 text-[#00FFFF]">
                                    Our Aim
                                </h3>
                                <p className="text-center lg:text-start">
                                    {About && About[0].para3}
                                </p>
                            </div>
                        </div>
                        <div className="box rounded-md px-6 sm:px-5 lg:px-8 py-6 md:py-8  md:flex items-center">
                            <div className="right">
                                <h3 className="text-lg lg:text-xl font-bold mb-2 text-center md:text-start md:mb-0 text-[#00FFFF]">
                                    Our Vision
                                </h3>
                                <p className="text-center lg:text-start">
                                    {About && About[0].para4}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
