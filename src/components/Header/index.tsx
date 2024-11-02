import { Link } from "react-router-dom";
import ThemeSelector from "../ThemeSelector";
import Button from "../Buttons";

export default function Header() {
    return <div className="flex justify-between px-20 py-3 bg-palette dark:bg-palette_950 place-items-center">
        <span>{"<DS/>"}</span>
        <div className="flex gap-10 place-items-center text-h2">
            <div className="flex gap-5">
                <Link to={"/about"}>About</Link>
                <Link to={"/skills"}>Skills</Link>
                <Link to={"/experience"}>Experience</Link>
                <Link to={"/work"}>Work</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            <div className="flex gap-5">
                <ThemeSelector />
                <Button />
            </div>
        </div>
    </div>
}