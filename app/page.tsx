import College from "@/components/entry/College";
import Heading from "@/components/heading/Heading";
import * as colleges from "@/resources/colleges.json"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-full mx-auto ">
            <main
                className="flex flex-wrap min-h-screen w-full max-w-3xl flex-row items-start zain-extralight">
                <Heading/>

                {/* {
                    [...new Set(colleges.ar)].sort((el, altEl) => el.name.localeCompare(altEl.name)).map((el, idx) =>
                        <College
                            college={el.name} portal={el.portal} status={el.status as 0 | 1 | 2 | 3}
                            key={`${el} ${idx}`}/>)
                }*/}
            </main>
        </div>
    );
}
