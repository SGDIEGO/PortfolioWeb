import { Link } from "react-router-dom";
import ThemeSelector from "../ThemeSelector";
import Button from "../Buttons";
import { useState } from "react";

import "./index.css"

export default function Header() {
    const [toggle, setToggle] = useState(false)

    return <div className="flex justify-between place-items-center mx-5">
        <span>{"<DS/>"}</span>

        <div className="size-4 cursor-pointer" onClick={() => {setToggle(!toggle)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
        </div>

        <div className="flex align-middle gap-5 place-items-center">
            <div className="flex gap-5">
                <Link to={"/about"}>About</Link>
                <Link to={"/skills"}>Skills</Link>
                <Link to={"/experience"}>Experience</Link>
                <Link to={"/work"}>Work</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            <div className="flex gap-5 ">
                <ThemeSelector />
                <Button />
            </div>
        </div>
    </div>
}