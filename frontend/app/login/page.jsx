import Link from "next/link"

export default function Page() {
    return(
       <div className="flex justify-center items-center min-h-screen bg-red-50 ">
            <div className="bg-white p-6 border border-zinc-300 rounded-xl max-w-[450px]">
                <h1 className="font-bold text-4xl text-center mb-2">Login</h1>
                <p className="mb-4 text-center">Hello, welcome back</p>
                <input type="email" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Email" />
                <input type="password" className="w-full border border-zinc-300 px-4 p-2 mb-2 rounded-xl" placeholder="Password" />
                <Link className="underline w-full block text-zinc-500 mb-2" href={"/forgot-password"}>Forgot password?</Link>
                <button className="bg-red-400 p-2 text-xl mb-4 w-full rounded-xl text-white">Log in</button>
                <p className="text-center">Don't have an accout? <Link href={"/sign-up"} className="text-red-400">Sign Up</Link></p>
            </div>
       </div>
    )
}