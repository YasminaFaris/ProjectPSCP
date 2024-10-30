"use client"

export default function Page({ params }) {
    const i = params.sub
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center content-center min-h-screen bg-red-50 ">
                <h1 className="font-bold text-4xl text-center mb-2">{i}</h1>
                <div className="w-full">

                    <div className=" flex bg-white p-6 border border-zinc-300 w-full max-w-[450px] mx-auto justify-center">
                        <div className=" flex items-center gap-3"><p className=" text-center">คะแนนรวม</p><input type="number" className=" border border-zinc-300 px-4 p-1 tex-sm w-[100px] "></input></div>
                    </div>
                </div>
            </div>
        </div>
    )
}