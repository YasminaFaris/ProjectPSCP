"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page(){

    const [ name , setName ] = useState("")
    const [ subID , setsubID ] = useState("")
    const id = 67070111
    const route = useRouter()

    async function onCreate(){
        // รอ backend
        const response = await fetch('http://127.0.0.1:8000/insertsubject', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({id, name , subID }),
         });

        const result = await response.json();
        route.push("/subject/" + name)
    
    }

    return(
       <div className="flex justify-center items-center min-h-screen bg-red-50 p-4">
            <div className="bg-white p-6 border border-zinc-300 rounded-xl max-w-[450px] ">
            <h1 className="font-bold text-4xl text-center mb-2">Subject</h1>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="ชื่อวิชา" />
                <input value={subID} onChange={(e) => setsubID(e.target.value)} type="ID" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="รหัสวิชา" />
                <button onClick={onCreate} className="bg-red-400 p-2 text-xl mb-4 w-full rounded-xl text-white">เพื่มวิชา</button>
            </div>
       </div>
    )
}