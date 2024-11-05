import Tag from "../Tag"

interface WorkCardProps {
    title: string
    description: string
    tag: string[]
    img: string
    reverse: boolean
}

export default function WorkCard(props: WorkCardProps) {
    const renderTag = () => {
        return props.tag.map(tag => <Tag content={tag} />)
    }

    return <div className="dark:bg-palette_800 text-body2 shadow-lg rounded-md">
        <div className={`grid gap-10 place-items-center tablet:flex tablet:place-items-stretch ${props.reverse ? "tablet:flex-row-reverse":""} tablet:flex-nowrap tablet:items-center tablet:justify-between px-10 py-5`}>
            <div className="h-full tablet:w-1/2 dark:bg-palette_600">
                <img className="w-full h-full object-cover" src={props.img} alt="" />
            </div>
            <div className="tablet:w-1/2">
                <div className="grid gap-5 text-body2">
                    <div>
                        <span>{props.title}</span>
                    </div>
                    <div>
                        <span>{props.description}</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        {renderTag()}
                    </div>
                </div>
            </div>
        </div>
    </div>
}