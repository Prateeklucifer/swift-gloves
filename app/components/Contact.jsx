import React from 'react'

export default function Contact() {
    return (
        // <div className="md:px-4">
        //     <div className="container m-auto">
        //         <div className="name">
        //         </div>
        //     </div>
        // </div>
        <div className=" container m-auto flex flex-col lg:px-28 xl:px-72 ">
            <div className="right px-4 py-2 flex flex-col gap-6 lg:py-8 lg:px-12 xl:px-28">
                <div className="name flex flex-col gap-4 md:flex-row">
                    <div className="firstname md:w-1/2">
                        <label htmlFor="last" className="block mb-2">First Name <span className="text-red-400">*</span></label>
                        <input type="text" name="" id="last" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-sky-500" />
                    </div>
                    <div className="lastname md:w-1/2">
                        <label htmlFor="name" className="block mb-2">Last Name <span className="text-red-400">*</span></label>
                        <input type="text" name="" id="name" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-sky-500" />
                    </div>
                </div>

                <div className="email">
                    <label htmlFor="email" className="block mb-2">Email <span className="text-red-400">*</span></label>
                    <input type="email" name="" id="email" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-sky-500" />
                </div>
                <div className="phone">
                    <label htmlFor="phone" className="block mb-2">Phone number</label>
                    <input type="number" name="" id="phone" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-sky-500" />
                </div>
                <div className="messege">
                    <label htmlFor="msg" className="block mb-2">Message</label>
                    <textarea name="" id="msg" className="w-full h-52 px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-sky-500"></textarea>
                </div>

                <button className="text-white px-4 py-2 rounded-md bg-sky-500 w-full">Lets Talk</button>
            </div>
        </div>
    )
}
