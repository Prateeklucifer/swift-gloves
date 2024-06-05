"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const getName = (e) => {
        setName(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    async function sendRequest() {
        let res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({ name, password })
        })

        const data = await res.json()

        if (res.status === 200) {
            setTimeout(() => {
                router.push('/admin')
            }, 2000);
        } else {
            // will throw error
        }
    }

    return (
        <div className="flex justify-center items-center flex-col h-[70vh]">
            <div className="md:px-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="Heading font-bold text-center text-2xl mt-4 md:mt-8 md:text-3xl">Login</div>
                </div>
            </div>
            <div className=" container mx-auto flex flex-col md:px-32 lg:px-52 xl:px-64 2xl:px-72 ">
                <div className="right px-4 py-2 flex flex-col gap-6 lg:py-8 lg:px-12 xl:px-28">

                    <div className="name">
                        <label htmlFor="name" className="block mb-2 text-gray-200">Name</label>
                        <input type="name" name="" id="name" className="w-full px-2 py-1 outline-none ring-2 rounded-sm ring-gray-700 focus:ring-sky-400 bg-gray-800/50" value={name} onChange={getName} />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" name="" id="password" className="w-full px-2 py-1 outline-none ring-2 rounded-sm ring-gray-700 focus:ring-sky-400 bg-gray-800/50" value={password} onChange={getPassword} />
                    </div>

                    <button className="text-white px-4 py-2 rounded-md bg-sky-500/90 hover:bg-sky-500/80 w-full font-semibold" onClick={sendRequest}>Login</button>

                </div>
            </div>
        </div>
    )
}
