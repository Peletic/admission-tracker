"use client"
export default function Portal({url}: { url: string }) {
    return (<div>
        <a href={url}>{url}</a>
    </div>)
}