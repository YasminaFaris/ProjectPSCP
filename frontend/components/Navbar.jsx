import { House , Menu , CircleUserRound } from "lucide-react"

export function Navbar(props){
    return(
        <div className="bg-zinc-600 text-white flex justify-between p-4">
            <div className="flex gap-2">
                <House />
                <Menu />
            </div>
            <a className="flex gap-2">
                {props.name}
                <CircleUserRound />
            </a>
        </div>
    )
}