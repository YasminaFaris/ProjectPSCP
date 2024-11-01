"use client"

import Link from "next/link"
import { useState } from "react"

export default function Page(){

    const [ userid , setID ] = useState("")
    const [ username , setName ] = useState("")
    const [ password , setPassword ] = useState("")
    
    async function onCreate(){
        // รอ backend
        try{
            const response = await fetch('http://127.0.0.1:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userid, username , password }),
            });
   
           const result = await response.json();
        }
        catch(err){
            console.log(err)
        }
    }

//<input type="password" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Confirm Password" />
    return(
        <div className="flex justify-center items-center min-h-screen bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8283.jpg?t=st=1730457212~exp=1730460812~hmac=eb35c2503d617b2e891048eb19ada7d3c48ce4c9d417eb91f6fa8cfa359b1724&w=996')] bg-cover bg-center h-64 rounded-lg shadow-md">
            <div className="bg-white p-6 border border-zinc-300 rounded-xl max-w-[450px]">
                <h1 className="font-bold text-4xl text-center mb-2 text-sky-500">Sign Up</h1>
                <p className="mb-4 text-center text-sky-500">Just a few quick things to get started</p>
                <input value={userid} onChange={(e) => setID(e.target.value)}type="text" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="ID" />
                <input value={username} onChange={(e) => setName(e.target.value)}type="text" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="text" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Password" />
                
                <button onClick={onCreate}className="bg-sky-400 p-2 text-xl mb-4 w-full rounded-xl text-white">Sign Up</button>
                <p className="text-center text-sky-500">Already have an accout? <Link href={"/login"} className="text-sky-600">Log in</Link></p>
            </div>
       </div>
    )
}