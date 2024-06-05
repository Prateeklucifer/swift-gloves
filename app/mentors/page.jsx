import React from 'react'
import MentorsCmp from '../components/Mentors'

export default function Mentors() {
  return (
    <div className="md:px-4">
      <div className="container m-auto px-4 md:px-0">
        <div className="info text-sky-400 font-semibold text-center mb-2 md:mt-8">Our mentors</div>
        <div className="small-heading text-white text-3xl px-4 font-bold text-center mb-6">Pricing plans for teams of all sizes</div>
        <div className="para text-lg px-4 text-center text-gray-200">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</div>
        <MentorsCmp/>
      </div>

    </div>
  )
}
