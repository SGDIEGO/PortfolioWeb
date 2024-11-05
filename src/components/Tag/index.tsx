interface TagProps {
    content: string
}

export default function Tag(props: TagProps) {
    return <div className="px-2 bg-palette_200 dark:bg-palette_700 dark:text-palette_300 flex justify-center rounded-2xl text-body3">
        <span>{props.content}</span>
    </div>
}