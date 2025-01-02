import React from 'react'
import MentorsCmp from '../components/Trainers'

export default function Mentors() {
  return (
    <div className="md:px-4">
      <div className="container m-auto px-4 md:px-0">
        <div className="info text-[#00FFFF] font-semibold text-center mb-2 md:mt-8">Our Trainers</div>
        <div className="small-heading text-white text-3xl px-4 font-bold text-center mb-6">Expert Trainers to Guide Your Journey</div>
        <div className="para text-lg px-4 text-center text-gray-200  md:px-24 lg:px-36 xl:px-56 2xl:px-72">At Swift Gloves, our mentors are the backbone of our success. With years of professional experience in boxing and fitness coaching, they bring unparalleled expertise and passion to every session.</div>
        <MentorsCmp/>
      </div>

    </div>
  )
}
