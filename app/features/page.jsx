import React from 'react'
import Features from '../components/Features'

export default function FeaturesPage() {
    return (
        <div className="md:px-4 min-h-screen">
            <div className="container m-auto px-4 md:px-0 mt-6">
                <div className="md:w-[70%] lg:w-[60%] xl:w-1/2">
                    <div className="heading text-2xl font-bold sm:text-3xl">What Sets Us Apart</div>
                    <div className="para mt-3 mb-3 sm:mb-6 md:mb-8 md:pr-16 xl:pr-28">At Swift Gloves, we go beyond ordinary training to provide a truly exceptional experience. From world-class facilities and expert coaches to tailored programs designed for all skill levels, every aspect of our academy is crafted to help you reach your full potential. </div>
                </div>
                <Features />
            </div>
        </div>
    )
}
