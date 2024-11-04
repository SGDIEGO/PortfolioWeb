import Tag from "../Tag"

interface WorkCardProps {
    title: string
    description: string
    tag: string[]
    img: string
}

export default function WorkCard(props: WorkCardProps) {
    const renderTag = () => {
        return props.tag.map(tag => <Tag content={tag} />)
    }

    return <div className="grid gap-10 place-items-center text-body2 mx-3">
        <div className="">
            <img className="w-full h-full object-cover" src={props.img} alt="" />
        </div>
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
}