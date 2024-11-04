import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import '../index.css'

export default function MainLayout() {
    return <div className="relative bg-palette text-palette_600 dark:bg-palette_900 dark:text-palette_300 flex flex-col min-h-svh gap-5">
        <Header />
        <Outlet />
    </div>
}