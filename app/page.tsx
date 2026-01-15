import College from "@/components/entry/College";
import Heading from "@/components/heading/Heading";
import * as colleges from "@/resources/colleges.json"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-2/5 mx-auto text-[--foreground] bg-[--background]">
            <div className={"mt-6 justify-start"}>
                <Heading/>
            </div>
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-evenly py-10 zain-extralight">
                {
                    [...new Set(colleges.ar)].sort((el, altEl) => el.name.localeCompare(altEl.name)).map((el, idx) =>
                        <College
                            college={el.name} portal={el.portal} status={el.status as 0 | 1 | 2 | 3}
                            key={`${el} ${idx}`}/>)
                }
            </main>
        </div>
    );
}
