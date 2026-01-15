export default function Status({num} : {num : 0|1|2|3}) {
    const str = num == 0 ? "waiting" : num == 1 ? "accepted" : num == 2 ? "deferred" : "denied"
    return (<div className={"bg-heavy w-fit h-fit p-4 rounded-lg"} style={
        {
            backgroundColor: num == 0 ? "slategray" : num == 1 ? "forestgreen" : num == 2 ? "palevioletred" : "palevioletred"
        }
    }>
        {str}
    </div>)
}