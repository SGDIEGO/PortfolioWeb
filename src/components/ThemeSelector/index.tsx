import { useEffect, useRef, useState } from "react"
import { getLS, saveLS } from "../../utils/localstorage"

export default function ThemeSelector() {
    const ref = useRef<HTMLButtonElement>(null)
    const [theme, setTheme] = useState(getLS('theme'))

    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

        saveLS('theme', theme)
    }, [theme])

    const onClick = () => {
        if (theme == "dark") setTheme("light")
        else setTheme("dark")
    }

    return <button ref={ref} onClick={onClick}><i className="fa-solid fa-circle-half-stroke"></i></button>
}