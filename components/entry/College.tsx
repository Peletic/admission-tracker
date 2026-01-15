import Status from "@/components/entry/Status";
import Portal from "./Portal";

export default function College({college, portal, status} : {college : string, portal : string, status : 0|1|2|3}) {
    return (<div
        className={"flex flex-row justify-between text-base items-center rounded-lg p-4 my-2 w-4/5 h-fit animate-shift"} style={{backgroundImage: `linear-gradient(to bottom left, hsl(${Math.floor(Math.random()*255)}, 50%, 50%), hsl(${Math.floor(Math.random()*255)}, 50%, 50%))`}}>
        <a href={portal} className={"text-2xl font-extralight underline underline-offset-2"}>
            {college}
        </a>
        <Status num={status}/>
    </div>)
}