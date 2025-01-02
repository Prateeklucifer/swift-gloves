import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="md:px-4">

            <div className="container m-auto xl:flex xl:mt-6">
                <div className="left flex flex-col gap-3 px-4 md:pl-0 md:pr-5 lg:pr-8 xl:w-1/2 xl:justify-center md:items-center  ">
                    <div className="heading font-bold text-white text-4xl mt-14 md:text-center">Unleash Your Inner Champion</div>
                    <div className="para text-white mt-3  md:text-center">Step into the world of power, discipline, and endurance at Swift Gloves. Whether you're here to master the art of boxing, build unmatched strength, or simply find your confidence, we have the tools, trainers, and spirit to help you achieve greatness. Join a community where champions are made and every punch takes you closer to your goals.</div>

                    <div className="button gap-6 flex items-center md:mt-4 text-sm ">
                        <Link href={"/pricing"} className="bg-[#00FFFF]/60 text-white py-2 px-4 rounded-lg" >Get started</Link>
                        <Link href={"/contact"} className="bg-gray-700 text-white py-2 px-4 rounded-lg" >Learn more</Link>
                    </div>
                </div>
                <div className="right mt-8 xl:w-1/2 xl:mt-0 2xl:px-20">
                    <Image src="/hero.png" height={500} width={500} alt="" className="w-full md:rounded-2xl" />
                </div>
            </div>
        </div>
    )
}
