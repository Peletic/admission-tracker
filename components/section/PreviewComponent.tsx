import React from "react";
import clsx from "clsx";

export default function PreviewComponent({className, children} : {className: string, children: React.ReactNode}) {
    return (<div className={clsx("p-4", className)}>
        {children}
    </div>)
}