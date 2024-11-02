import { useRef } from "react"

export default function ThemeSelector() {
    const ref = useRef<HTMLButtonElement>(null)
    const onClick = () => {
        document.documentElement.classList.toggle("dark")
        // Rotate the button icon 180 degrees 
        ref.current?.classList.toggle("rotate-180")
    }

    return <button ref={ref} onClick={onClick}><i className="fa-solid fa-circle-half-stroke"></i></button>
}