"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminAbout() {

    const [About, setAbout] = useState([])

    const getAllAbout = async () => {
        let res = await fetch('http://localhost:3000/api/about')
        let data = await res.json()
        setAbout(data.data)
    }

    const updatePara1 = (event, index) => {
        let newData = [...About]
        newData[index].para1 = event.target.value
        setAbout(newData)
    }
    const updatePara2 = (event, index) => {
        let newData = [...About]
        newData[index].para2 = event.target.value
        setAbout(newData)
    }
    const updatePara3 = (event, index) => {
        let newData = [...About]
        newData[index].para3 = event.target.value
        setAbout(newData)
    }
    const updatePara4 = (event, index) => {
        let newData = [...About]
        newData[index].para4 = event.target.value
        setAbout(newData)
    }
    const updatePara5 = (event, index) => {
        let newData = [...About]
        newData[index].para5 = event.target.value
        setAbout(newData)
    }
    const updatePara6 = (event, index) => {
        let newData = [...About]
        newData[index].para6 = event.target.value
        setAbout(newData)
    }
    const updatePara7 = (event, index) => {
        let newData = [...About]
        newData[index].para7 = event.target.value
        setAbout(newData)
    }
    const updatePara8 = (event, index) => {
        let newData = [...About]
        newData[index].para8 = event.target.value
        setAbout(newData)
    }
    const updatePara9 = (event, index) => {
        let newData = [...About]
        newData[index].para9 = event.target.value
        setAbout(newData)
    }
    const updatePara10 = (event, index) => {
        let newData = [...About]
        newData[index].para10 = event.target.value
        setAbout(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/about', {
            method: "POST",
            body: JSON.stringify({ AllAbout: About })
        })

        if (res.status == 200) {
            sucessMsg("data updated sucessfully")
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
        getAllAbout()
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
            <div className="md:mx-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="heading text-3xl font-semibold text-center my-4">About Us</div>
                    <div className="faqs flex flex-col gap-6">
                        {About?.map((item, index) => (
                            <div className="faq flex flex-col" key={index}>
                                <label htmlFor="para1">
                                    <div className="block py-2">para1</div>
                                    <textarea name="para1" id="para1" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.para1} onChange={(e) => {
                                        updatePara1(e, index)
                                    }}></textarea>
                                </label>
                                <label htmlFor="para2">
                                    <div className="block py-2">para2</div>
                                    <textarea name="para2" id="para2" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.para2} onChange={(e) => {
                                        updatePara2(e, index)
                                    }}></textarea>
                                </label>
                                <label htmlFor="para3">
                                    <div className="block py-2">para3</div>
                                    <textarea name="para3" id="para3" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.para3} onChange={(e) => {
                                        updatePara3(e, index)
                                    }}></textarea>
                                </label>
                                <label htmlFor="para4">
                                    <div className="block py-2">para4</div>
                                    <textarea name="para4" id="para4" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.para4} onChange={(e) => {
                                        updatePara4(e, index)
                                    }}></textarea>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="buttons my-4 flex flex-col w-full">
                        <button className="bg-[#00FFFF]/60 text-white py-[2px] px-4 rounded-md self-end w-fit" onClick={() => {
                            updateData()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}