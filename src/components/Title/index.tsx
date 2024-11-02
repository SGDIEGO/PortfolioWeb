import { twMerge } from "tailwind-merge"

interface TitleProps {
    content: string
    classNames?: string
}

export default function Title(props: TitleProps) {
    const classNameMerged = twMerge("flex place-content-center", props.classNames)

    return <div className={classNameMerged}>
        <div className="bg-palette_200 dark:bg-palette_700 px-5 rounded-xl">
            <h5 className="text-label1_light dark:text-label1_dark">{props.content}</h5>
        </div>
    </div>
}