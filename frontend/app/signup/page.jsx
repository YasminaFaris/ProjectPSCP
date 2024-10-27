import Link from "next/link"

export default function Page() {
    return(
       <div className="flex justify-center items-center min-h-screen bg-red-50 ">
            <div className="bg-white p-6 border border-zinc-300 rounded-xl max-w-[450px]">
                <h1 className="font-bold text-4xl text-center mb-2">Sing Up</h1>
                <p className="mb-4 text-center">Just a few quick things to get started</p>
                <input type="email" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Email" />
                <input type="password" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Password" />
                <button className="bg-red-400 p-2 text-xl mb-4 w-full rounded-xl text-white">Sing Up</button>
                <p className="text-center">Already have an accout? <Link href={"/login"} className="text-red-400">Sign Up</Link></p>
            </div>
       </div>
    )
}