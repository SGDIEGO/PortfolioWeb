interface TagProps {
    content: string
}

export default function Tag(props: TagProps) {
    return <div className="px-4 py-2 bg-palette_200 flex justify-center rounded-2xl">
        <span>{props.content}</span>
    </div>
}