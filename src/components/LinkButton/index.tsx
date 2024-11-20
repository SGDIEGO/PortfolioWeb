import { Link } from "react-router-dom"

interface LinkButtonProperties {
    content?: string
    redirect?: string
    type: "button" | "icon"
    children?: JSX.Element
}

export default function LinkButton({ content, redirect, type, children }: LinkButtonProperties) {
    if (type === "icon") {
        return <Link to={redirect || ""} className="">
            {children}
        </Link>
    }

    return <Link to={redirect || ""} className="p-2 bg-palette_600 text-palette_50 rounded-xl">
        <div className="flex gap-3">
            {children}
            <span>{content}</span>
        </div>
    </Link>
}