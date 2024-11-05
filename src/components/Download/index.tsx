import cv from "../../assets/CV.pdf"
export default function DownloadButton() {
    return <a href={cv} download={"cv"} target="_blank" className="p-1 rounded-xl bg-palette_900 text-palette_50 hover:bg-palette_700 dark:bg-palette_50 dark:text-palette_900 hover:dark:bg-palette_200">Download-CV</a>
}