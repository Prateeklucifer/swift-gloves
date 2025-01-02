"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminFeatures() {

    const [trainers, setTrainers] = useState([])

    const gettrainers = async () => {
        let res = await fetch('http://localhost:3000/api/trainers')
        let data = await res.json()
        setTrainers(data.data)
    }

    const updateName = (event, index) => {
        let newData = [...trainers]
        newData[index].name = event.target.value
        setTrainers(newData)
    }

    const updateImageURL = (event, index) => {
        let newData = [...trainers]
        newData[index].imageURL = event.target.value
        setTrainers(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/trainers', {
            method: "PUT",
            body: JSON.stringify({ AllRecords: trainers })
        })

        if (res.status == 200) {
            sucessMsg("updated sucessfully")
        } else {
            errorMsg("something went wrong")
        }

    }


    const sucessMsg = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const errorMsg = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    useEffect(() => {
        gettrainers()
    }, [])

    return (
        <>
         <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <div className="w-full">
                <div className="container m-auto px-4 md:px-0 ">
                    <div className="heading text-3xl font-semibold text-center my-4">All trainers</div>
                    <div className="faqs flex flex-col gap-6">
                        {trainers?.map((item, index) => (
                            <div className="faq flex flex-col" key={index}>
                                <label htmlFor="name">
                                    <div className="block py-2">Title</div>
                                    <input type="text" name="name" id="name" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.name} onChange={(e) => {
                                        updateName(e, index)
                                    }} />
                                </label>
                                <label htmlFor="url">
                                    <div className="block py-2">image url</div>
                                    <input type="text" name="url" id="url" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.imageURL} onChange={(e) => {
                                        updateImageURL(e, index)
                                    }} />
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="buttons my-4 flex items-center justify-end">
                        <button className="bg-[#00FFFF]/60 text-white py-[2px] px-4 rounded-md w-fit" onClick={() => {
                            updateData()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
