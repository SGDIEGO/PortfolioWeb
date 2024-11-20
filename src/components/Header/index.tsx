import { Link } from "react-router-dom";
import ThemeSelector from "../ThemeSelector";
import DownloadButton from "../Download";
import { useEffect, useState } from "react";

import "./index.css"

export default function Header() {
    const [toggle, setToggle] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (width >= 680) setToggle(false)
    }, [width])

    return <div className="text-body2 relative flex justify-between place-items-center px-5 shadow-md bg-palette dark:bg-palette_700 z-[999]">
        <Link className="z-[998] text-h3_desktop" to={"/"}>{"<DS/>"}</Link>

        <div className="z-[997] size-4 cursor-pointer tablet tablet:hidden" onClick={() => { setToggle(!toggle) }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
        </div>

        <div className={`w-full gap-5 place-items-center bg-palette dark:bg-palette_700 tablet:flex tablet:w-fit ${toggle ? "absolute grid top-0 right-0 shadow-lg" : "hidden"}`}>
            <Link to={"/about"}>About</Link>
            <Link to={"/skills"}>Skills</Link>
            <Link to={"/experience"}>Experience</Link>
            <Link to={"/work"}>Work</Link>
            <Link to={"/contact"}>Contact</Link>
            <ThemeSelector />
            <DownloadButton />
        </div>
    </div>
}